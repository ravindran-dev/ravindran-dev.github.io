import releaseRegistry from "@/data/releases.generated.json";
import { products, type Product } from "@/data/products";

type SyncedRelease = {
  version: string;
  date: string;
  summary: string;
  url: string;
  status: string;
  assets: { name: string; url: string; size: number; digest: string | null }[];
};
type SyncedProduct = { releases: SyncedRelease[]; tags: string[] };
const synced = releaseRegistry as Record<string, SyncedProduct>;

export function getPublishedProduct(product: Product): Product {
  const live = synced[product.slug];
  if (!live) return product;
  const releases = live.releases ?? [];
  const latestRelease = releases[0];
  const stable = releases.find((release) => release.status === "stable") ?? latestRelease;
  const tagVersion = live.tags?.[0]?.split(":").pop()?.replace(/^v/, "");

  const fallbackDownloads = stable?.assets
    ?.filter((asset) => !/\.ya?ml$|\.json$|\.txt$|\.sig$|\.sha256$/i.test(asset.name))
    .map((asset) => ({
      label: asset.name,
      platform: product.platforms.join(" · "),
      format: asset.name.split(".").pop()?.toUpperCase() ?? "File",
      url: asset.url,
      size: asset.size,
      sha256: asset.digest?.replace(/^sha256:/, ""),
      status: (stable.status as "stable" | "preview" | "development") || "stable",
    }));

  return {
    ...product,
    latestTag: stable?.version ?? (!releases.length ? tagVersion ?? product.latestTag : product.latestTag),
    releaseDate: stable?.date || product.releaseDate,
    downloads: product.downloads?.length ? product.downloads : fallbackDownloads?.length ? fallbackDownloads : product.downloads,
    releaseHistory: releases.length ? releases.map((release) => ({ version: release.version, date: release.date, summary: release.summary, url: release.url })) : product.releaseHistory,
  };
}

export function getPublishedProducts() {
  return products.map(getPublishedProduct);
}
