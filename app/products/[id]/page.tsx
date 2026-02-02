export const dynamic = "force-dynamic";

import Image from "next/image";
import { fetchProductById } from "@/lib/productsService";
import { AddToCartButton } from "@/components/add-to-cart-button";

export default async function ProductDetailPage({ params }: any) {
  const product = await fetchProductById(params.id);

  return (
    <div className="row mt-4">
      <div className="col-md-5 text-center">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="img-fluid"
          style={{ objectFit: "contain", height: "300px" }}
        />
      </div>

      <div className="col-md-7">
        <h2 className="fw-bold">{product.title}</h2>
        <p className="text-muted">{product.category}</p>
        <p>{product.description}</p>
        <h4 className="fw-bold">${product.price}</h4>

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
  );
}