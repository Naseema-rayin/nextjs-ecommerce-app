export default function HelpPage({ params }: any) {
  const path = params.slug?.join("/") || "index";

  return (
    <div>
      <h1 className="fw-bold mb-3">Help Center</h1>
      <p>You are viewing help page: {path}</p>
    </div>
  );
}