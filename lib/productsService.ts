const BASE_URL = "https://fakestoreapi.com";

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

    if (!res.ok) {
      console.error("API returned non-OK:", res.status);
      return null;
    }

    let data;
    try {
      data = await res.json();
    } catch (err) {
      console.error("JSON parse failed:", err);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Fetch failed:", err);
    return null;
  }
}

export async function fetchProducts(category?: string) {
  const url = category
    ? `${BASE_URL}/products/category/${decodeURIComponent(category)}`
    : `${BASE_URL}/products`;

  const data = await safeFetch(url);
  if (!data) return [];

  return data.map((p: any) => ({
    ...p,
    image: p.image?.replace("http://", "https://"),
  }));
}

export async function fetchProductById(id: string) {
  const data = await safeFetch(`${BASE_URL}/products/${id}`);
  if (!data) return null;

  return {
    ...data,
    image: data.image?.replace("http://", "https://"),
  };
}

export async function fetchCategoryPreview(category: string, limit = 4) {
  const decoded = decodeURIComponent(category);
  const data = await safeFetch(`${BASE_URL}/products/category/${decoded}`);
  if (!data) return [];

  return data.slice(0, limit).map((p: any) => ({
    ...p,
    image: p.image?.replace("http://", "https://"),
  }));
}