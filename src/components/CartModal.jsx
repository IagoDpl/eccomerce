export default function CartModal({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay escuro que desfoca o fundo - Clicar nele fecha o modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* A Gaveta (Slide-over) em si */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          
          {/* Header do Carrinho */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-100">
            <h2 className="text-lg font-medium text-neutral-900">Seu Carrinho</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <span className="sr-only">Fechar</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Área Central (Itens) */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col justify-center items-center h-full text-neutral-400 space-y-4">
              <svg className="h-12 w-12 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-sm">Seu carrinho está vazio.</p>
            </div>
          </div>

          {/* Rodapé e Checkout */}
          <div className="border-t border-neutral-100 p-6 bg-neutral-50">
            <div className="flex justify-between text-base font-medium text-neutral-900 mb-6">
              <p>Subtotal</p>
              <p>R$ 0,00</p>
            </div>
            <p className="text-xs text-neutral-500 mb-4">Frete e taxas calculados no checkout.</p>
            <button className="w-full bg-neutral-900 text-white px-6 py-4 rounded-sm text-sm font-medium tracking-wide uppercase hover:bg-neutral-800 transition-colors">
              Finalizar Compra
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}