import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Grid Superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Marca e Descrição */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-neutral-900">
              MODA.
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed pr-4">
              Redefinindo o básico com materiais premium e design atemporal. Feito para durar e acompanhar o seu ritmo.
            </p>
          </div>

          {/* Links - Loja */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-widest mb-2">Loja</h3>
            <Link href="/list" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Novidades</Link>
            <Link href="/list" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Masculino</Link>
            <Link href="/list" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Feminino</Link>
            <Link href="/list" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Acessórios</Link>
          </div>

          {/* Links - Suporte */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-widest mb-2">Suporte</h3>
            <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Fale Conosco</Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Trocas e Devoluções</Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Guia de Medidas</Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Rastrear Pedido</Link>
          </div>

          {/* Newsletter (Captura de E-mail) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-widest mb-2">Newsletter</h3>
            <p className="text-sm text-neutral-500">
              Receba acesso antecipado a lançamentos e promoções exclusivas.
            </p>
            <form className="flex mt-2 relative">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full border-b border-neutral-300 py-2 text-sm outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder:text-neutral-400"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-2 text-sm font-medium text-neutral-900 uppercase tracking-widest hover:text-neutral-500 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
          
        </div>

        {/* Linha Inferior (Copyright e Redes Sociais) */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-100 mt-16 pt-8 gap-6">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Moda. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 text-xs font-medium text-neutral-500 uppercase tracking-widest">
            <a href="#" className="hover:text-neutral-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">TikTok</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Pinterest</a>
          </div>
        </div>

      </div>
    </footer>
  );
}