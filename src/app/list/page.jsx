import Filter from "../../components/Filter";
import ProductList from "../../components/product/ProductList";

export default function ListPage() {
  const mockProducts = [
    { id: '1', name: 'Camiseta Preta Essencial', price: 129.90, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop' },
    { id: '2', name: 'Calça Jeans Reta', price: 259.99, imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop' },
    { id: '3', name: 'Jaqueta de Couro', price: 899.90, imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop' },
    { id: '4', name: 'Tênis Branco Clássico', price: 399.00, imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Banner de Campanha Edge-to-Edge */}
      <div className="relative w-full h-[40vh] md:h-[55vh] bg-neutral-100">
        {/* Você pode trocar a URL abaixo para um .gif se preferir movimento */}
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
          alt="Campanha Outono Inverno" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/15 transition-all" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase drop-shadow-md">
            Outono 26
          </h1>
        </div>
      </div>

      {/* 2. Barra de Filtros Full-Width */}
      <div className="w-full border-b border-neutral-200 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Filter />
        </div>
      </div>

      {/* 3. Grid de Produtos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <ProductList products={mockProducts} />
      </div>
      
    </div>
  );
}