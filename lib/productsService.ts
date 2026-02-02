const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(category?: string) {
  const url = category
    ? `${BASE_URL}/products/category/${decodeURIComponent(category)}`
    : `${BASE_URL}/products`;

  const res = await fetch(url);
  return res.json();
}

export async function fetchProductById(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

export async function fetchCategoryPreview(category: string, limit = 4) {
  const decoded = decodeURIComponent(category);
  const res = await fetch(`${BASE_URL}/products/category/${decoded}`);
  const data = await res.json();
  return data.slice(0, limit);
}