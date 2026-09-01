import Link from "next/link";

export default function CartPage() {
  // Itens estáticos para visualização do layout
  const cartItems = [
    {
      id: 1,
      name: "Camiseta Preta Essencial",
      price: 129.90,
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Calça Jeans Reta",
      price: 259.99,
      quantity: 1,
      imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-neutral-900 mb-8 tracking-tight">Seu Carrinho</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Lista de Itens */}
        <div className="flex-1">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-6 py-6 border-b border-neutral-200">
              <div className="w-24 h-32 relative bg-neutral-100 flex-shrink-0">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">{item.name}</h3>
                  <p className="text-sm text-neutral-500 mt-1">Tam: M</p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center border border-neutral-300 rounded-sm">
                    <button className="px-3 py-1 text-neutral-500 hover:text-neutral-900 transition-colors">-</button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button className="px-3 py-1 text-neutral-500 hover:text-neutral-900 transition-colors">+</button>
                  </div>
                  <span className="font-medium text-neutral-900">
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo do Pedido */}
        <div className="w-full lg:w-[400px] bg-neutral-50 p-8 rounded-sm h-max">
          <h2 className="text-xl font-medium text-neutral-900 mb-6">Resumo do Pedido</h2>
          
          <div className="flex justify-between text-neutral-600 mb-4 text-sm">
            <span>Subtotal</span>
            <span>R$ 519,79</span>
          </div>
          <div className="flex justify-between text-neutral-600 mb-4 text-sm">
            <span>Frete</span>
            <span className="text-green-600 font-medium">Grátis</span>
          </div>
          
          <div className="h-[1px] w-full bg-neutral-200 my-6" />
          
          <div className="flex justify-between text-lg font-semibold text-neutral-900 mb-8">
            <span>Total</span>
            <span>R$ 519,79</span>
          </div>
          
          <button className="w-full bg-neutral-900 text-white py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-sm">
            Finalizar Compra
          </button>
          
          <Link href="/list" className="block text-center text-sm text-neutral-500 underline underline-offset-4 mt-6 hover:text-neutral-900 transition-colors">
            Continuar Comprando
          </Link>
        </div>
        
      </div>
    </div>
  );
}