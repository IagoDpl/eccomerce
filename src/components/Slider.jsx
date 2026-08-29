import Link from "next/link";

export default function Slider() {
  return (
    <div className="relative w-full h-[70vh] bg-neutral-100 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
        alt="Coleção"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 drop-shadow-md">
          Nova Coleção
        </h1>
        <Link 
          href="/list"
          className="bg-white text-neutral-900 px-8 py-3 rounded-sm font-semibold tracking-wide uppercase mt-6 hover:bg-neutral-100 transition-colors"
        >
          Explorar
        </Link>
      </div>
    </div>
  );
}