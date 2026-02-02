"use client";

import Image from "next/image";
import { useState } from "react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    alt: "Electronics Sale",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1700056029402-fbe10046bd8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    alt: "Fashion Deals",
  },
  {
    url: "https://images.unsplash.com/photo-1617228065596-389e80530ad5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    alt: "Home & Decor",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="position-relative mb-4"style={{ height: "400px", width: "100%", overflow: "hidden" }}>
      <Image
        src={carouselImages[current].url}
        alt={carouselImages[current].alt}
        fill
        style={{ objectFit: "cover" }}
      />

      <button
        onClick={prevSlide}
        className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2"
      >
        ❯
      </button>

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-circle bg-white ${current === index ? "opacity-100" : "opacity-50"}`}
            style={{ width: "10px", height: "10px", cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}