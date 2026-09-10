"use client";

import { useState } from "react";

export default function ProductPage() {
  // Mock de dados do produto
  const product = {
    name: "Camiseta Preta Essencial",
    price: 129.90,
    description: "Confeccionada em algodão pima peruano, esta camiseta oferece um toque extremamente macio e caimento perfeito. O design minimalista a torna a peça base ideal para qualquer guarda-roupa.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Preto", hex: "#171717" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Areia", hex: "#d6cabc" }
    ]
  };

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Preto");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        
        {/* Galeria de Imagens (Esquerda) */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          {/* Miniaturas */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto scrollbar-hide md:w-24 flex-shrink-0">
            {product.images.map((img, index) => (
              <button 
                key={index} 
                onClick={() => setActiveImage(index)}
                className={`relative w-20 h-24 md:w-full md:h-32 flex-shrink-0 bg-neutral-100 transition-all ${
                  activeImage === index ? "ring-1 ring-neutral-900 ring-offset-2" : "opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Imagem Principal */}
          <div className="w-full h-[500px] md:h-[700px] bg-neutral-100 relative">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-opacity duration-500" 
            />
          </div>
        </div>

        {/* Informações do Produto (Direita) */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4 md:pt-10">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            {product.name}
          </h1>
          <p className="text-xl font-medium text-neutral-600 mt-4">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          
          <div className="h-[1px] w-full bg-neutral-200 my-8" />

          <p className="text-neutral-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Seletor de Cores */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-neutral-900">Cor</span>
              <span className="text-sm text-neutral-500">{selectedColor}</span>
            </div>
            <div className="flex gap-4">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color.name ? "border-neutral-900 scale-110" : "border-transparent ring-1 ring-neutral-200"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Selecionar cor ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Seletor de Tamanhos (Estilo Pill) */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-neutral-900">Tamanho</span>
              <button className="text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-900">
                Guia de medidas
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 w-16 text-sm font-medium rounded-full border transition-all ${
                    selectedSize === size 
                      ? "bg-neutral-900 text-white border-neutral-900" 
                      : "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botão de Compra */}
          <button className="w-full bg-neutral-900 text-white py-5 rounded-sm font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-sm mb-6">
            Adicionar ao Carrinho
          </button>

          {/* Acordeão de Informações Extras */}
          <div className="flex flex-col border-t border-neutral-200 mt-4">
            <div className="py-4 border-b border-neutral-200 flex justify-between items-center cursor-pointer hover:text-neutral-600 transition-colors">
              <span className="text-sm font-medium text-neutral-900">Composição e Cuidados</span>
              <span className="text-neutral-400">+</span>
            </div>
            <div className="py-4 border-b border-neutral-200 flex justify-between items-center cursor-pointer hover:text-neutral-600 transition-colors">
              <span className="text-sm font-medium text-neutral-900">Envio e Devoluções</span>
              <span className="text-neutral-400">+</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}