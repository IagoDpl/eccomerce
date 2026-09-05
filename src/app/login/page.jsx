"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
      
      {/* Coluna da Imagem (Escondida no Mobile, Ocupa 50% no Desktop) */}
      <div className="hidden md:block w-1/2 relative bg-neutral-100">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop" 
          alt="Campanha Fashion" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Coluna do Formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-24 bg-white">
        <div className="w-full max-w-md flex flex-col gap-8">
          
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2">
              {isLogin ? "Bem-vindo de volta" : "Criar uma conta"}
            </h1>
            <p className="text-sm text-neutral-500">
              {isLogin 
                ? "Insira seus dados para acessar seus pedidos e favoritos." 
                : "Junte-se a nós para uma experiência de compra exclusiva."}
            </p>
          </div>

          <form className="flex flex-col gap-5">
            {!isLogin && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-900">Nome completo</label>
                <input 
                  type="text" 
                  className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
            )}
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-900">E-mail</label>
              <input 
                type="email" 
                className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-neutral-900">Senha</label>
                {isLogin && (
                  <Link href="#" className="text-xs text-neutral-500 underline underline-offset-2 hover:text-neutral-900 transition-colors">
                    Esqueceu a senha?
                  </Link>
                )}
              </div>
              <input 
                type="password" 
                className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="button"
              className="w-full bg-neutral-900 text-white font-semibold uppercase tracking-widest text-sm py-4 rounded-sm mt-2 hover:bg-neutral-800 transition-colors shadow-sm"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </button>
          </form>

          <div className="flex items-center justify-center text-sm text-neutral-600">
            <span>{isLogin ? "Ainda não tem uma conta?" : "Já possui cadastro?"}</span>
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="ml-2 font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700 transition-colors"
            >
              {isLogin ? "Criar conta" : "Fazer login"}
            </button>
          </div>

        </div>
      </div>
      
    </div>
  );
}