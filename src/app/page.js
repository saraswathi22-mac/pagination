import ProductItem from "@/components/ProductItem";
import { database } from "@/utils/database";

export default function Home() {
  const { products } = database;
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        const { id, name } = product;
        return <ProductItem key={id} product={product} />;
      })}
    </main>
  );
}
