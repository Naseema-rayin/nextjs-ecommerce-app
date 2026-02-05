export const dynamic = "force-dynamic";

import Image from "next/image";
import { fetchProductById } from "@/lib/productsService";
import { AddToCartButton } from "@/components/add-to-cart-button";

export default async function ProductDetailPage({ params }: any) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <h2 className="text-danger mt-4">Product not found</h2>;
  }

  return (
    <div className="row mt-4">
      {/* LEFT: Image / Gallery */}
      <div className="col-md-5 text-center">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.title}
          width={300}
          height={300}
          className="img-fluid mb-3"
          style={{ objectFit: "contain", height: "300px" }}
        />

        {/* Optional gallery */}
        {product.images && product.images.length > 1 && (
          <div className="d-flex gap-2 justify-content-center mt-2 flex-wrap">
            {product.images.slice(0, 4).map((img: string, i: number) => (
              <Image
                key={i}
                src={img || "/placeholder.png"}
                alt={`${product.title} ${i}`}
                width={70}
                height={70}
                className="border rounded"
                style={{ objectFit: "cover" }}
              />
            ))}
          </div>
        )}
      </div>

      {/* RIGHT: Details */}
      <div className="col-md-7">
        <h2 className="fw-bold">{product.title}</h2>

        <p className="text-muted mb-1">{product.category}</p>
        {product.brand && <p className="mb-1"><strong>Brand:</strong> {product.brand}</p>}
        {product.rating && <p className="mb-1"><strong>Rating:</strong> {product.rating} ⭐</p>}
        {product.stock && <p className="mb-1"><strong>Stock:</strong> {product.stock} available</p>}

        <p className="mt-3">{product.description}</p>

        <h4 className="fw-bold mt-3">
          ${product.price}
          {product.discountPercentage && (
            <span className="text-success ms-2">
              ({product.discountPercentage}% OFF)
            </span>
          )}
        </h4>

        <div className="mt-3">
          <AddToCartButton
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image || "/placeholder.png",
            }}
          />
        </div>
      </div>
    </div>
  );
}