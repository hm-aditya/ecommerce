import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        where: { status: "published" },
        select: {
          id: true,
          name: true,
          description: true,
          images: true,
          price: true,
        },
      });
      return { title: "All Products", data: data };
    }
    case "men": {
      const data = await prisma.product.findMany({
        where: { status: "published", category: "men" },
        select: {
          id: true,
          name: true,
          description: true,
          images: true,
          price: true,
        },
      });
      return { title: "Men", data: data };
    }
    case "women": {
      const data = await prisma.product.findMany({
        where: { status: "published", category: "women" },
        select: {
          id: true,
          name: true,
          description: true,
          images: true,
          price: true,
        },
      });
      return { title: "Women", data: data };
    }
    case "kids": {
      const data = await prisma.product.findMany({
        where: { status: "published", category: "kids" },
        select: {
          id: true,
          name: true,
          description: true,
          images: true,
          price: true,
        },
      });
      return { title: "Kids", data: data };
    }
    default: {
      return notFound();
    }
  }
}

type Props = {
  params: Promise<{ name: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { name } = await params;
  noStore();
  const { data, title } = await getData(name);
  
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}