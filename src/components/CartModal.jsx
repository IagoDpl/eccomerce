"use client";

import Link from "next/link";

export default function CartModal() {
  // Itens estáticos apenas para visualização até conectarmos a API REST
  const cartItems = [
    { id: 1, name: "Camiseta Preta Essencial", price: 129.90, qty: 2, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=100&auto=format&fit=crop" },
    { id: 2, name: "Calça Jeans Reta", price: 259.99, qty: 1, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=100&auto=format&fit=crop" },
  ];

  return (
    <div className="absolute top-12 right-0 p-6 rounded-sm shadow-[0_10px_40px_rgb(0,0,0,0.1)] bg-white w-80 lg:w-96 flex flex-col gap-6 z-50 border border-neutral-100">
      <h2 className="text-lg font-medium text-neutral-900">Meu Carrinho</h2>
      
      <div className="flex flex-col gap-5">
        {cartItems.map(item => (
          <div className="flex gap-4" key={item.id}>
            <img src={item.img} alt={item.name} className="w-16 h-20 object-cover rounded-sm bg-neutral-100" />
            <div className="flex flex-col justify-between w-full">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-neutral-900 text-sm">{item.name}</h3>
                <span className="text-sm font-semibold text-neutral-900">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between text-sm text-neutral-500">
                <span className="text-xs">Qtd: {item.qty}</span>
                <button className="text-neutral-400 text-xs hover:text-red-500 transition-colors underline underline-offset-2">Remover</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-2">
        <div className="flex items-center justify-between font-medium text-neutral-900 mb-2">
          <span>Subtotal</span>
          <span className="text-lg font-semibold">R$ 519,79</span>
        </div>
        <p className="text-xs text-neutral-500 mb-6">
          Frete e taxas calculados na próxima etapa.
        </p>
        
        <div className="flex gap-3 text-sm font-medium">
          {/* O botão que leva para a página completa /cart */}
          <Link 
            href="/cart" 
            className="rounded-sm py-3 px-4 border border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-all w-1/2 text-center"
          >
            Ver Carrinho
          </Link>
          <button className="rounded-sm py-3 px-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-sm w-1/2 text-center">
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
}