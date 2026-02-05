const BASE_URL = "https://dummyjson.com";

const fetchOptions: RequestInit = {
  method: "GET",
  cache: "no-store",
  headers: {
    Accept: "application/json",
    "User-Agent": "Mozilla/5.0",
  },
};

async function safeFetch(url: string) {
  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) return null;

    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

// All categories you want to support
const ALL_CATEGORIES = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "bottoms",
  "shoes",
];

// Normalize image fields
function normalizeProduct(p: any) {
  return {
    ...p,
    image:
      p.thumbnail ||
      p.images?.[0] ||
      p.productImages?.[0] ||
      p.productImage ||
      p.image ||
      "/placeholder.png",
  };
}

export async function fetchProducts(category?: string) {
  if (category) {
    const decoded = decodeURIComponent(category);
    const data = await safeFetch(`${BASE_URL}/products/category/${decoded}`);
    if (!data) return [];
    return data.products.map(normalizeProduct);
  }

  // Fetch ALL categories manually
  const results = await Promise.all(
    ALL_CATEGORIES.map((cat) =>
      safeFetch(`${BASE_URL}/products/category/${cat}`)
    )
  );

  const merged = results.flatMap((d) => d?.products || []);
  return merged.map(normalizeProduct);
}

export async function fetchProductById(id: string) {
  const data = await safeFetch(`${BASE_URL}/products/${id}`);
  if (!data) return null;
  return normalizeProduct(data);
}

export async function fetchCategoryPreview(category: string, limit = 4) {
  const decoded = decodeURIComponent(category);
  const data = await safeFetch(`${BASE_URL}/products/category/${decoded}`);
  if (!data) return [];
  return data.products.slice(0, limit).map(normalizeProduct);
}