"use client";

import React from "react";
import { useState } from "react";

export default function Add() {
  const [quantity, setQuantity] = useState(1);
  const stock = 10; // Valor estático temporário até integrarmos a API

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center gap-4">
        {/* Controle de Quantidade */}
        <div className="flex items-center border border-neutral-300 rounded-sm">
          <button
            onClick={() => handleQuantity("d")}
            className="px-4 py-3 text-neutral-500 hover:text-neutral-900 transition-colors disabled:opacity-50"
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="w-8 text-center text-sm font-medium text-neutral-900">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantity("i")}
            className="px-4 py-3 text-neutral-500 hover:text-neutral-900 transition-colors disabled:opacity-50"
            disabled={quantity === stock}
          >
            +
          </button>
        </div>
        
        <div className="text-xs text-neutral-500">
          Apenas <span className="text-orange-500 font-medium">{stock} itens</span> em estoque!
        </div>
      </div>

      {/* Botão de Ação Principal (CTA) */}
      <button className="w-full bg-neutral-900 text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-sm">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}