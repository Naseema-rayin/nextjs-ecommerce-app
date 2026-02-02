"use client";

import { useCart } from "./cart-context";

export function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <button
      className="btn btn-primary w-100"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  );
}