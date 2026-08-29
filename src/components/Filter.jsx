"use client";

export default function Filter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 mb-8 border-y border-neutral-200 bg-white gap-4">
      
      {/* Filtros à esquerda */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto">
        <select
          name="type"
          className="py-2 px-4 rounded-full text-sm font-medium bg-neutral-50 border border-neutral-200 text-neutral-700 outline-none focus:border-neutral-900 cursor-pointer appearance-none"
        >
          <option value="">Tipo</option>
          <option value="physical">Físico</option>
          <option value="digital">Digital</option>
        </select>
        
        <input
          type="text"
          name="min"
          placeholder="Preço Min"
          className="text-sm rounded-full pl-4 py-2 w-24 border border-neutral-200 bg-neutral-50 outline-none focus:border-neutral-900"
        />
        <input
          type="text"
          name="max"
          placeholder="Preço Max"
          className="text-sm rounded-full pl-4 py-2 w-24 border border-neutral-200 bg-neutral-50 outline-none focus:border-neutral-900"
        />
        
        <select
          name="size"
          className="py-2 px-4 rounded-full text-sm font-medium bg-neutral-50 border border-neutral-200 text-neutral-700 outline-none focus:border-neutral-900 cursor-pointer appearance-none"
        >
          <option value="">Tamanho</option>
          <option value="p">P</option>
          <option value="m">M</option>
          <option value="g">G</option>
        </select>
      </div>

      {/* Ordenação à direita */}
      <div className="w-full md:w-auto flex justify-end">
        <select
          name="sort"
          className="py-2 px-6 rounded-full text-sm font-medium bg-white border border-neutral-300 text-neutral-900 outline-none focus:border-neutral-900 cursor-pointer appearance-none shadow-sm"
        >
          <option value="">Ordenar por</option>
          <option value="asc price">Preço (Menor ao Maior)</option>
          <option value="desc price">Preço (Maior ao Menor)</option>
          <option value="asc lastUpdated">Mais Recentes</option>
          <option value="desc lastUpdated">Mais Antigos</option>
        </select>
      </div>
      
    </div>
  );
}