import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="layout">
        <Sidebar />
        <ProductList />
      </div>
    </main>
  );
}