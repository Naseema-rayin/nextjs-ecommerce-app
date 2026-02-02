"use client";

import { useCart } from "@/components/cart-context";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1 className="fw-bold mb-4">Your Cart</h1>

      <ul className="list-group mb-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.title}</strong> × {item.quantity}
              <p className="text-muted mb-0">${item.price} each</p>
            </div>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h4>Total: ${total.toFixed(2)}</h4>

      <button className="btn btn-primary mt-3" onClick={clearCart}>
        Checkout (dummy)
      </button>
    </div>
  );
}