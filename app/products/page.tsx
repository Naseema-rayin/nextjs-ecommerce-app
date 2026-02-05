export const dynamic = "force-dynamic";

import { fetchProducts } from "@/lib/productsService";
import FilterClient from "./FilterClient";

export default async function ProductsPage() {
  const products = await fetchProducts(); // now includes ALL categories

  return (
    <div>
      <h1 className="fw-bold mb-3">Products</h1>
      <FilterClient products={products} />
    </div>
  );
}