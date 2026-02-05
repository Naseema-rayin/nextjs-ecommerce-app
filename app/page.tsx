export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { fetchCategoryPreview } from "@/lib/productsService";
import { AddToCartButton } from "@/components/add-to-cart-button";

export default async function HomePage() {
  const categories = ["smartphones", "laptops", "fragrances", "groceries"];

  const previews = await Promise.all(
    categories.map((cat) => fetchCategoryPreview(cat, 4))
  );

  return (
    <div className="container mt-4">
      <Carousel />

      <h1 className="fw-bold mt-4">Welcome to MyShop</h1>
      <p className="text-muted">Browse top categories and trending products.</p>

      {categories.map((category, index) => {
        const products = previews[index] || [];

        return (
          <div key={category} className="my-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-capitalize">{category}</h3>
              <Link
                href={`/products?category=${encodeURIComponent(category)}`}
                className="text-primary"
              >
                View all
              </Link>
            </div>

            {products.length === 0 ? (
              <p className="text-muted">No products found.</p>
            ) : (
              <div className="row">
                {products.map((product: any) => (
                  <div key={product.id} className="col-md-3 mb-4">
                    <div className="card h-100 shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="card-img-top p-3"
                        style={{ objectFit: "contain", height: "200px" }}
                      />

                      <div className="card-body d-flex flex-column">
                        <h6 className="card-title text-truncate">
                          {product.title}
                        </h6>
                        <p className="text-muted">${product.price}</p>

                        <div className="mt-auto">
                          <AddToCartButton
                            product={{
                              id: product.id,
                              title: product.title,
                              price: product.price,
                              image: product.image,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}