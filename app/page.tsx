import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 }, // 🔥 FIX
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
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
              Products are temporarily unavailable.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}