import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, ArrowUpRight, Check, Code2, ExternalLink, Github, Monitor, Terminal } from "lucide-react";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";

function ProductMark({ product }: { product: Product }) {
  if (product.slug === "archon") return <div className="product-mark tux-mark"><Image src="/products/linux-penguin.png" alt="Linux penguin" width={72} height={86} priority /></div>;
  if (product.slug === "arch-linux-dev-pack") return <div className="product-mark arch-mark"><Image src="/products/archlinux-logo.svg" alt="Arch Linux logo" width={72} height={72} priority /><Image src="/products/linux-penguin.png" alt="Linux penguin" width={54} height={64} /></div>;
  return <div className="product-mark" style={{ "--product-accent": product.accent } as CSSProperties}>
    {product.icon ? <Image src={product.icon} alt={`${product.shortName} icon`} width={72} height={72} priority /> : <span>{product.shortName.slice(0, 1)}</span>}
  </div>;
}

export function ProductPage({ product }: { product: Product }) {
  const version = product.latestTag ? `v${product.latestTag}` : "No Git tag";
  return (
    <main className={`product-site product-${product.slug}`} style={{ "--product-accent": product.accent } as CSSProperties}>
      <section className="product-hero">
        <div className="product-hero-inner">
          <div className="flex items-center justify-between">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"><ArrowLeft size={15} /> All products</Link>
            {product.sourcePublic === false ? <span className="inline-flex items-center gap-2 text-sm text-white/45"><Github size={16} /> Public repository unavailable</span> : <Link href={product.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"><Github size={16} /> Repository <ArrowUpRight size={14} /></Link>}
          </div>
          <div className="product-hero-copy">
            <ProductMark product={product} />
            <p className="mt-8 text-xs font-mono uppercase tracking-[.22em] text-white/55">{product.category} <span className="px-2 text-white/20">/</span> {product.status}</p>
            <h1>{product.name}</h1>
            <p className="product-positioning">{product.positioning}</p>
            <p className="product-description">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.downloads?.length ? <a href={product.downloads[0].url} className="product-button product-button-primary"><ArrowDownToLine size={17} /> Download {product.downloads[0].status === "development" ? "Debug " : ""}{product.downloads[0].format}</a> : <a href={product.primaryAction?.href ?? "#install"} className="product-button product-button-primary"><ArrowDownToLine size={17} /> {product.primaryAction?.label ?? "Build from source"}</a>}
              <a href={product.downloads?.length ? "#documentation" : "#install"} className="product-button product-button-secondary"><Code2 size={16} /> {product.downloads?.length ? "Documentation" : "Build instructions"}</a>
            </div>
          <div className="product-hero-facts">
              <div><span>Release status</span><strong>{product.releaseStatus === "archived" ? "Archived" : product.releaseStatus === "preview" ? "Preview" : product.releaseStatus === "stable" && product.latestTag ? `Stable · ${version}` : product.latestTag ? `Development tag · ${version}` : "Development · source build"}</strong></div>
              <div><span>Platforms</span><strong>{product.platforms.join(" · ")}</strong></div>
              <div><span>License</span><strong>See repository</strong></div>
            </div>
          </div>
          <div className="product-hero-art" aria-hidden="true"><div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/><div className="hero-orbit hero-orbit-three"/><div className="hero-art-core"><ProductMark product={product}/></div></div>
        </div>
      </section>

      <div className="product-content">
        <section className="product-section" aria-labelledby="screens-title">
          <div className="product-section-heading"><div><p className="product-eyebrow">A closer look</p><h2 id="screens-title">Made for the work it does.</h2></div><span className="text-xs text-muted">Media from the project repository</span></div>
          {product.screenshots?.length ? <div className="product-gallery">{product.screenshots.map((shot) => <figure className="product-shot" key={shot.src}><div className="product-shot-image"><Image src={shot.src} alt={shot.alt} width={1000} height={700} /></div><figcaption>{shot.caption}</figcaption></figure>)}</div> : <div className="product-media-empty"><Monitor size={20}/><div><strong>No screenshots in the repository</strong><p>This page does not substitute invented product screenshots.</p></div></div>}
        </section>

        {product.detailSections?.map((section) => <section className="product-section product-editorial" key={section.title}>
          <div className="product-section-heading"><div><p className="product-eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div><p className="product-editorial-intro">{section.intro}</p></div>
          <div className="product-feature-grid">{section.items.map((item, index) => <article className="product-feature" key={item.title}><span className="product-feature-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </section>)}

        {product.slug === "airlink" && <section className="product-section" aria-labelledby="airlink-flow"><div className="product-section-heading"><div><p className="product-eyebrow">Connection flow</p><h2 id="airlink-flow">Discovery and transfer layers</h2></div><p className="product-editorial-intro">Protocols shown here come from the repository’s documented design; actual transport selection depends on the available device connection.</p></div><div className="product-flow" role="img" aria-label="Airlink uses BLE and Wi-Fi Direct for discovery, then a TCP socket over local Wi-Fi or Wi-Fi Direct with ECDH key agreement and AES-256-GCM encrypted transfer"><div><strong>Nearby devices</strong><span>Android peers</span></div><i>BLE + Wi-Fi Direct discovery</i><div><strong>Connection setup</strong><span>Pair and establish session</span></div><i>TCP socket · local network / Wi-Fi Direct</i><div><strong>Encrypted transfer</strong><span>ECDH key agreement · AES-256-GCM</span></div></div></section>}
        {product.slug === "archon" && <section className="product-section" aria-labelledby="archon-flow"><div className="product-section-heading"><div><p className="product-eyebrow">Package workflow</p><h2 id="archon-flow">Search, resolve, review, apply</h2></div><p className="product-editorial-intro">On Arch, dependency planning handles repository and AUR relationships. Other distributions delegate operations to their native package manager.</p></div><div className="product-flow archon-flow"><div><strong>Search</strong><span>Ranked package results</span></div><i>dependencies + constraints</i><div><strong>Resolve</strong><span>Providers · conflicts · cycles</span></div><i>topological plan</i><div><strong>Review</strong><span>Plan / dry-run confirmation</span></div><i>user confirmation</i><div><strong>Build &amp; apply</strong><span>Bubblewrap for Arch AUR builds</span></div></div></section>}

        <section className="product-section" aria-labelledby="features-title">
          <div className="product-section-heading"><div><p className="product-eyebrow">What it does</p><h2 id="features-title">Built around the essentials.</h2></div></div>
          <div className="product-feature-grid">{product.features.map((feature, index) => <article className="product-feature" key={feature.title}><span className="product-feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div>
        </section>

        <section className="product-section product-specs" aria-label="Technical details">
          <div><p className="product-eyebrow">Under the hood</p><h2>Technical overview</h2><p className="mt-4 max-w-2xl leading-7 text-muted">{product.architecture}</p></div>
          <div className="product-spec-columns">
            <div><h3>Platforms</h3>{product.platforms.map((item) => <p key={item}><Check size={14}/>{item}</p>)}</div>
            <div><h3>Languages</h3>{product.languages.map((item) => <p key={item}><Check size={14}/>{item}</p>)}</div>
            <div><h3>Stack</h3><div className="flex flex-wrap gap-2">{product.stack.map((item) => <span className="product-tech" key={item}>{item}</span>)}</div></div>
            {product.systemRequirements?.length ? <div className="requirements-list"><h3>System requirements</h3>{product.systemRequirements.map((item) => <p key={item}><Check size={14}/>{item}</p>)}</div> : null}
          </div>
        </section>

        <section className="product-section" id="install" aria-labelledby="install-title">
          <div className="product-section-heading"><div><p className="product-eyebrow">Get started</p><h2 id="install-title">Build or install</h2></div><span className="product-release-state">{product.latestTag ? `Latest repository tag ${version}` : "No repository tag found"}</span></div>
          {product.downloads?.map((asset) => <article className="product-download-card" key={asset.url}><div className="product-download-card-top"><div><p className="product-eyebrow">{asset.status === "development" ? "Development preview · Android debug-signed build" : `Verified release asset · v${product.latestTag}`}</p><h3>{asset.label}</h3><p>{asset.platform} <span>·</span> {asset.architecture ?? asset.format} <span>·</span> {(asset.size / (1024 * 1024)).toFixed(1)} MiB</p></div><a className="product-button product-button-dark" href={asset.url}><ArrowDownToLine size={16}/> Download {asset.status === "development" ? "Debug " : ""}{asset.format}</a></div>{asset.sha256 && <div className="product-checksum"><span>SHA-256</span><code>{asset.sha256}</code></div>}{asset.status === "development" && <p className="product-download-note">Built from the public source as a debug preview and signed with the standard Android debug key. This is not a production-signed stable release.</p>}</article>)}
          <div className="product-install-grid">{product.install.map((step) => <article className="product-install" key={step.label}><div className="flex items-center gap-2"><Terminal size={16}/><h3>{step.label}</h3></div><pre><code>{step.command}</code></pre>{step.note && <p>{step.note}</p>}</article>)}</div>
          <p className="product-download-note"><ArrowDownToLine size={15}/>{product.downloads?.[0]?.status === "development" ? "A development preview APK is available. No stable GitHub release has been published." : product.downloads?.length ? "The download above is a verified GitHub Release asset." : product.latestTag ? "A Git tag is present, but no downloadable release asset was verified. Build from source using the instructions above." : "No downloadable release asset was verified. Build from source using the instructions above."}</p>
        </section>

        <section className="product-section" id="releases" aria-labelledby="release-title">
          <div className="product-section-heading"><div><p className="product-eyebrow">Release center</p><h2 id="release-title">Version history</h2></div></div>
          {product.releaseHistory?.map((release, index) => <div className="product-release-row" key={release.version}><div className="product-release-dot"/><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-3"><strong>v{release.version}</strong><span className="product-release-state">{index === 0 ? "Latest release" : "Previous release"}</span><time dateTime={release.date}>{new Date(`${release.date}T00:00:00Z`).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}</time></div><p>{release.summary}</p></div><a href={release.url} target="_blank" rel="noreferrer" aria-label={`View release ${release.version}`}><ExternalLink size={16}/></a></div>)}
          {!product.releaseHistory?.length && <div className="product-release-row"><div className="product-release-dot"/><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-3"><strong>{product.latestTag ? `v${product.latestTag}` : "Development"}</strong><span className="product-release-state">{product.latestTag ? "Latest local Git tag; no GitHub release entry" : "No local Git tag found"}</span>{product.releaseDate && <time dateTime={product.releaseDate}>{new Date(`${product.releaseDate}T00:00:00Z`).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}</time>}</div><p>{product.releaseNote}</p></div>{product.sourcePublic === false ? null : <a href={`${product.repository}/releases`} target="_blank" rel="noreferrer" aria-label="Check repository releases"><ExternalLink size={16}/></a>}</div>}
          {product.developmentVersion && <div className="product-release-row product-development-row"><div className="product-release-dot"/><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-3"><strong>{product.developmentVersion}</strong><span className="product-release-state">Manifest metadata</span></div><p>Development metadata only. It is not presented as a stable published release.</p></div></div>}
          <p className="mt-4 text-xs leading-5 text-muted">Public releases and tags are synchronized during the site build. Dates and assets come from GitHub’s public API; manifest versions are marked as development metadata. Only verified release assets are offered as downloads.</p>
        </section>

        <section className="product-section" id="documentation" aria-labelledby="docs-title">
          <div className="product-section-heading"><div><p className="product-eyebrow">For builders</p><h2 id="docs-title">Documentation</h2></div></div>
          {product.documentation.length ? <div className="product-doc-grid">{product.documentation.map((doc) => <a href={doc.url} target="_blank" rel="noreferrer" className="product-doc-link" key={doc.label}><span>{doc.label}</span><ArrowUpRight size={15}/></a>)}</div> : <div className="product-media-empty"><Code2 size={18}/><div><strong>Documentation is not publicly reachable</strong><p>Details on this page come from the local project checkout. Repository access is required for the source guides.</p></div></div>}
          <div className="product-repo-block"><div><p className="product-eyebrow">Source code</p><strong>{product.repository.replace("https://github.com/", "")}</strong>{product.repositories?.map((repo) => <a href={repo.url} key={repo.url}>{repo.label}<ArrowUpRight size={13}/></a>)}</div>{product.sourcePublic === false ? <span className="product-release-state">Public repository unavailable</span> : <a className="product-button product-button-dark" href={product.repository} target="_blank" rel="noreferrer"><Github size={16}/> View repository</a>}</div>
        </section>

        <section className="product-section product-faq" aria-labelledby="faq-title">
          <div className="product-section-heading"><div><p className="product-eyebrow">Good to know</p><h2 id="faq-title">Frequently asked</h2></div></div>
          <div>{product.faq.map((item) => <details className="product-faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div>
        </section>

        <div className="product-back-link"><Link href="/products"><ArrowLeft size={15}/> Back to all products</Link><span>Part of <Link href="/">Ravindran’s software collection</Link></span></div>
      </div>
    </main>
  );
}
