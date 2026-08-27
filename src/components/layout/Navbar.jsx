import Link from "next/link";
import SearchBar from "../SearchBar";
import NavIcons from "../NavIcons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 transition-all duration-300">
      {/* sticky e backdrop-blur criam o efeito de vidro colado no topo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Minimalista */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-neutral-900">
              MARCA.
            </Link>
          </div>

          {/* Busca centralizada (oculta em telas muito pequenas) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Ícones de Ação */}
          <div className="flex items-center space-x-6">
            <NavIcons />
          </div>
          
        </div>
      </div>
    </header>
  );
}