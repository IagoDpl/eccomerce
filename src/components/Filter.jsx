"use client";

export default function Filter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 bg-white gap-4 w-full">
      
      {/* Filtros à esquerda */}
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <select
          name="type"
          className="py-2 px-5 rounded-full text-sm font-medium bg-white border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all outline-none cursor-pointer appearance-none shadow-sm min-w-[120px]"
        >
          <option value="">Tipo da Peça</option>
          <option value="camisetas">Camisetas</option>
          <option value="calcas">Calças</option>
          <option value="casacos">Casacos</option>
        </select>
        
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="min"
            placeholder="Min (R$)"
            className="text-sm rounded-full px-5 py-2 w-28 border border-neutral-300 bg-white text-neutral-600 hover:border-neutral-900 focus:border-neutral-900 transition-all outline-none shadow-sm"
          />
          <span className="text-neutral-400">-</span>
          <input
            type="text"
            name="max"
            placeholder="Max (R$)"
            className="text-sm rounded-full px-5 py-2 w-28 border border-neutral-300 bg-white text-neutral-600 hover:border-neutral-900 focus:border-neutral-900 transition-all outline-none shadow-sm"
          />
        </div>
        
        <select
          name="size"
          className="py-2 px-5 rounded-full text-sm font-medium bg-white border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all outline-none cursor-pointer appearance-none shadow-sm min-w-[120px]"
        >
          <option value="">Tamanho</option>
          <option value="p">P</option>
          <option value="m">M</option>
          <option value="g">G</option>
          <option value="gg">GG</option>
        </select>
      </div>

      {/* Ordenação à direita destacada */}
      <div className="w-full md:w-auto flex justify-end">
        <select
          name="sort"
          className="py-2 px-6 rounded-full text-sm font-medium bg-white border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all outline-none cursor-pointer appearance-none shadow-sm w-full md:w-auto text-center"
        >
          <option value="">Ordenar por Destaque</option>
          <option value="asc price">Menor Preço</option>
          <option value="desc price">Maior Preço</option>
          <option value="desc lastUpdated">Lançamentos</option>
        </select>
      </div>
      
    </div>
  );
}