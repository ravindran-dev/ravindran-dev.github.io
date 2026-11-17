import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct, products } from "@/data/products";
import { getPublishedProduct } from "@/data/productRegistry";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ product: slug }));
}

export async function generateMetadata({ params }: { params: { product: string } }): Promise<Metadata> {
  const product = getProduct(params.product);
  if (!product) return {};
  return {
    title: `${product.name} | Ravindran`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.positioning}`,
      description: product.description,
      url: `https://ravindran-dev.github.io/${product.slug}/`,
      siteName: "Ravindran Software",
      type: "website",
      images: product.icon ? [{ url: product.icon, alt: `${product.shortName} icon` }] : undefined,
    },
    alternates: { canonical: `https://ravindran-dev.github.io/${product.slug}/` },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Ravindran`,
      description: product.description,
      images: product.icon ? [product.icon] : undefined,
    },
  };
}

export default function ProductRoute({ params }: { params: { product: string } }) {
  const base = getProduct(params.product);
  if (!base) notFound();
  const product = getPublishedProduct(base);
  return <ProductPage product={product} />;
}
