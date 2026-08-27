import Image from "next/image";
import Link from "next/link";
// Ajuste o caminho do import da interface Product conforme a sua pasta
import { Product } from "../../types/product"; 
import React from "react";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-medium text-neutral-900 mb-10 tracking-wide">
        Novidades
      </h2>
      
      {/* Grid responsivo: 2 colunas no celular, 4 no desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-6 lg:gap-x-8">
        {products?.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group block cursor-pointer">
            
            {/* Container da Imagem */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 rounded-sm">
              <img
                src={product.imageUrl || "https://images.unsplash.com/photo-1434389678232-0408541546ce?q=80&w=800&auto=format&fit=crop"} 
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Etiqueta condicional caso esteja sem estoque */}
              {!product.inStock && (
                <div className="absolute top-3 left-3 bg-white/90 text-neutral-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                  Esgotado
                </div>
              )}
            </div>

            {/* Tipografia da Informação */}
            <div className="mt-5 flex flex-col space-y-1">
              <h3 className="text-sm font-medium text-neutral-900 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-neutral-500">{product.category}</p>
              <p className="text-sm font-semibold text-neutral-900 pt-1">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}