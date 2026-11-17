import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { getPublishedProducts } from "@/data/productRegistry";

export const metadata: Metadata = {
  title: "Products | Ravindran",
  description: "Official product pages, technical information and verified release status for software by Ravindran.",
  alternates: { canonical: "https://ravindran-dev.github.io/products/" },
};

export default function ProductsPage() {
  return <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
    <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"><ArrowLeft size={15}/> Portfolio</Link>
    <div className="mt-10 max-w-3xl"><p className="text-xs font-mono uppercase tracking-[.2em] text-primary">Software by Ravindran</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Products with a place of their own.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-muted">Explore the apps, Linux tools and developer environments I maintain. Each page links to its source, documents how to build it, and makes release status clear.</p></div>
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{getPublishedProducts().map((product) => <ProductCard key={product.slug} product={product}/>)}</div>
    <p className="mt-10 max-w-3xl text-xs leading-5 text-muted">Version labels reflect repository tags or manifest metadata checked during this update. Manifest versions are identified as development metadata unless a release is verified. No unverified binary downloads are linked.</p>
  </main>;
}
