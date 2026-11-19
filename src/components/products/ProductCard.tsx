import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Cpu, Package, Terminal } from "lucide-react";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const hasDownloads = Boolean(product.downloads?.length);
  const primaryDownload = product.downloads?.[0];

  return (
    <article
      className="product-card group flex flex-col justify-between"
      style={{ "--product-accent": product.accent } as CSSProperties}
    >
      <div>
        {/* Top bar: Icon, category, and status */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`product-icon ${
                product.slug === "arch-linux-dev-pack"
                  ? "product-icon-arch"
                  : ""
              }`}
            >
              {product.slug === "arch-linux-dev-pack" ? (
                <>
                  <Image src="/products/archlinux-logo.svg" alt="" width={24} height={24} unoptimized />
                  <Image src="/products/linux-penguin.png" alt="" width={22} height={26} unoptimized />
                </>
              ) : product.slug === "archon" ? (
                <Image src="/products/linux-penguin.png" alt="" width={30} height={36} unoptimized />
              ) : product.icon ? (
                <Image src={product.icon} alt="" width={40} height={40} unoptimized />
              ) : (
                <Package size={20} />
              )}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
                {product.category}
              </span>
              <h3 className="font-display text-xl uppercase tracking-normal text-foreground group-hover:text-[#ffe17c] transition-colors">
                {product.name}
              </h3>
            </div>
          </div>
          <span className="product-status flex items-center gap-1.5 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
            {product.status}
          </span>
        </div>

        {/* Positioning tagline & description */}
        <p className="mt-4 text-xs font-medium text-foreground line-clamp-1">
          {product.positioning}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">
          {product.description}
        </p>

        {/* Tags / Platforms metadata */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.latestTag && (
            <span className="product-meta font-mono">
              tag v{product.latestTag}
            </span>
          )}
          {product.platforms.slice(0, 1).map((platform) => (
            <span className="product-meta" key={platform}>
              {platform.split("(")[0].trim()}
            </span>
          ))}
          {product.languages.slice(0, 2).map((lang) => (
            <span className="product-meta" key={lang}>
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom action footer */}
      <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-3.5">
        <Link
          href={`/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary"
        >
          Explore Release <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        {hasDownloads && primaryDownload ? (
          <a
            href={primaryDownload.url}
            className="inline-flex items-center gap-1.5 rounded-md bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground border border-border/80 transition-colors hover:bg-primary/10 hover:border-primary/40 hover:text-primary"
            aria-label={`Download ${product.name} ${primaryDownload.format}`}
          >
            <ArrowDownToLine size={13} className="text-primary" />
            <span>{primaryDownload.format}</span>
            <span className="text-[10px] text-muted">
              ({(primaryDownload.size / (1024 * 1024)).toFixed(0)}MB)
            </span>
          </a>
        ) : (
          <Link
            href={`/${product.slug}#install`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
            aria-label={`Build or install ${product.name}`}
          >
            <Terminal size={13} /> Source &amp; install
          </Link>
        )}
      </div>
    </article>
  );
}
