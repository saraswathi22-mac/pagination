import { database } from "@/utils/database";
import Image from "next/image";

export default function Home() {
  const { products } = database;
  return (
    <main className="flex min-h-screen flex-col">
      {products.map((product) => {
        const { id, name } = product;
        return <div key={id}>{name}</div>;
      })}
    </main>
  );
}
