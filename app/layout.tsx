import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { ReactNode } from "react";
import { CartProvider } from "@/components/cart-context";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "MyShop E-Commerce",
  description: "Next.js App Router E-Commerce",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavBar />
          <main className="container mt-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}