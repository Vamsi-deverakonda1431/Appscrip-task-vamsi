import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store", // SSR
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
  } catch (error) {
    console.error("API ERROR:", error);
    return []; // prevent crash
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />

      <div className="layout">
        <Sidebar />

        <div className="grid">
          {products.length > 0 ? (
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p style={{ padding: "20px" }}>
              Failed to load products. Please try again later.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}