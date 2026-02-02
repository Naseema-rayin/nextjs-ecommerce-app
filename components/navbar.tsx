"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "Cart", href: "/cart" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">MyShop</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {navItems.map(({ label, href }) => (
              <li key={href} className="nav-item">
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? "fw-bold text-primary" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}