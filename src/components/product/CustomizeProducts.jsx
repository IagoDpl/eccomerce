"use client";

import { useState } from "react";

export default function CustomizeProducts() {
  const [selectedColor, setSelectedColor] = useState("Preto");
  const [selectedSize, setSelectedSize] = useState("M");

  const colors = [
    { name: "Preto", hex: "#171717" },
    { name: "Off-White", hex: "#f5f5f5" },
    { name: "Marinho", hex: "#1e3a8a" },
  ];

  const sizes = ["P", "M", "G", "GG"];

  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Seletor de Cores */}
      <div>
        <h4 className="text-sm font-medium text-neutral-900 mb-3">
          Cor: <span className="text-neutral-500 font-normal">{selectedColor}</span>
        </h4>
        <div className="flex items-center gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === color.name
                  ? "border-neutral-900 p-[2px]"
                  : "border-transparent"
              }`}
            >
              <div
                className="w-full h-full rounded-full border border-neutral-200"
                style={{ backgroundColor: color.hex }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Seletor de Tamanhos */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-medium text-neutral-900">Tamanho</h4>
          <button className="text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-900">
            Guia de Medidas
          </button>
        </div>
        <div className="flex items-center gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 flex items-center justify-center text-sm transition-colors border ${
                selectedSize === size
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-neutral-900"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}