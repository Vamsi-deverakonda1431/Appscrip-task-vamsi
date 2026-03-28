import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // ensures SSR
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />

      <div className="layout">
        <Sidebar />

        <div className="grid">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}