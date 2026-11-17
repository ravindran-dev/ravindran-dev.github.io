import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Package } from "lucide-react";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card group" style={{ "--product-accent": product.accent } as CSSProperties}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`product-icon ${product.slug === "arch-linux-dev-pack" ? "product-icon-arch" : ""}`}>
            {product.slug === "arch-linux-dev-pack" ? <><Image src="/products/archlinux-logo.svg" alt="" width={27} height={27} /><Image src="/products/linux-penguin.png" alt="" width={25} height={30} /></> : product.slug === "archon" ? <Image src="/products/linux-penguin.png" alt="" width={33} height={40} /> : product.icon ? <Image src={product.icon} alt="" width={44} height={44} /> : <Package size={21} />}
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted">{product.category}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">{product.name}</h3>
          </div>
        </div>
        <span className="product-status">{product.status}</span>
      </div>
      <p className="mt-5 min-h-12 text-sm leading-6 text-muted">{product.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {(product.latestTag ? [`Latest tag v${product.latestTag}`] : product.developmentVersion ? [`Dev ${product.developmentVersion}`] : ["No Git tag"]).map((version) => (
          <span className="product-meta" key={version}>{version}</span>
        ))}
        {product.platforms.slice(0, 2).map((platform) => <span className="product-meta" key={platform}>{platform}</span>)}
      </div>
      <div className="mt-7 flex items-center justify-between border-t border-border/70 pt-4">
        <Link href={`/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
          View product <ArrowUpRight size={15} />
        </Link>
        {product.downloads?.length ? <a href={product.downloads[0].url} className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-foreground" aria-label={`Download ${product.name} ${product.downloads[0].format}`}>
          <ArrowDownToLine size={14} /> Download {product.downloads[0].status === "development" ? "Debug " : ""}{product.downloads[0].format}
        </a> : <Link href={`/${product.slug}#install`} className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground" aria-label={`Build or install ${product.name}`}>
          <ArrowDownToLine size={14} /> Source &amp; install
        </Link>}
      </div>
    </article>
  );
}
