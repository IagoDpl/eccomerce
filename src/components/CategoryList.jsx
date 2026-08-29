import Link from "next/link";

export default function CategoryList() {
  // Lista de categorias para estruturar o visual
  const categories = [
    { id: 1, name: "Tudo", slug: "all" },
    { id: 2, name: "Camisetas", slug: "t-shirts" },
    { id: 3, name: "Calças", slug: "pants" },
    { id: 4, name: "Casacos", slug: "jackets" },
    { id: 5, name: "Acessórios", slug: "accessories" },
    { id: 6, name: "Calçados", slug: "shoes" },
  ];

  return (
    <div className="w-full border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com scroll horizontal ocultando a barra de rolagem */}
        <div className="flex overflow-x-auto py-5 space-x-3 md:space-x-6 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/list?cat=${category.slug}`}
              className="flex-shrink-0 px-6 py-2 text-sm font-medium rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all bg-white shadow-sm hover:shadow-md"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}