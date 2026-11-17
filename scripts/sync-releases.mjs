import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const products = JSON.parse(await readFile(join(root, 'src/data/release-sources.json'), 'utf8'));
let data = {};
try { data = JSON.parse(await readFile(join(root, 'src/data/releases.generated.json'), 'utf8')); } catch { /* first build has no cache */ }
for (const product of products) {
  const aggregate = { syncedAt: new Date().toISOString(), releases: [], tags: [] };
  for (const source of product.sources) {
    const repo = source.replace('https://github.com/', '');
    try {
      const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'ravindran-product-site' };
      const [releaseResponse, tagResponse] = await Promise.all([
        fetch(`https://api.github.com/repos/${repo}/releases?per_page=20`, { headers }),
        fetch(`https://api.github.com/repos/${repo}/tags?per_page=20`, { headers }),
      ]);
      if (!releaseResponse.ok || !tagResponse.ok) throw new Error(`GitHub API returned ${releaseResponse.status}/${tagResponse.status}`);
      const [releases, tags] = await Promise.all([releaseResponse.json(), tagResponse.json()]);
      aggregate.releases.push(...releases.map((r) => ({ version: r.tag_name.replace(/^v/, ''), tag: r.tag_name, date: (r.published_at || r.created_at || '').slice(0, 10), summary: r.body || 'Release notes were not provided.', url: r.html_url, status: r.draft ? 'preview' : r.prerelease ? 'preview' : 'stable', source: repo, assets: (r.assets || []).map((a) => ({ name: a.name, url: a.browser_download_url, size: a.size, contentType: a.content_type, digest: a.digest || null })) })));
      aggregate.tags.push(...tags.map((t) => `${repo}:${t.name}`));
      console.log(`${product.slug}/${repo}: synced ${releases.length} releases and ${tags.length} tags`);
    } catch (error) {
      console.warn(`${product.slug}/${repo}: release sync unavailable (${error.message}); retaining checked-in fallback`);
    }
  }
  aggregate.releases.sort((a, b) => b.date.localeCompare(a.date));
  if (aggregate.releases.length || aggregate.tags.length) data[product.slug] = aggregate;
}
const output = join(root, 'src/data/releases.generated.json');
await mkdir(join(root, 'src/data'), { recursive: true });
await writeFile(output, `${JSON.stringify(data, null, 2)}\n`);
