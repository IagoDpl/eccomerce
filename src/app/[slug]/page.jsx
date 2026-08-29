import ProductImages from "../../components/product/ProductImages";
import CustomizeProducts from "../../components/product/CustomizeProducts";
import Add from "../../components/Add";

export default function SinglePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        
        {/* Coluna da Esquerda: Galeria de Imagens */}
        <div className="w-full md:w-1/2 lg:w-[60%]">
          <ProductImages />
        </div>

        {/* Coluna da Direita: Detalhes do Produto (Fixa no Desktop) */}
        <div className="w-full md:w-1/2 lg:w-[40%] md:sticky top-28 h-max">
          <h1 className="text-3xl font-medium text-neutral-900 mb-2">
            Camiseta Essencial Algodão
          </h1>
          <p className="text-sm text-neutral-500 mb-6">Ref: 09283/2026</p>
          
          <div className="mb-8">
            <span className="text-2xl font-semibold text-neutral-900">R$ 129,90</span>
            <span className="text-sm text-neutral-500 ml-3 line-through">R$ 159,90</span>
          </div>
          
          <div className="h-[1px] w-full bg-neutral-200 mb-8" />
          
          {/* Seletores de Cor e Tamanho */}
          <CustomizeProducts />
          
          {/* Botão de Adicionar ao Carrinho */}
          <Add />
          
          <div className="h-[1px] w-full bg-neutral-200 mt-8 mb-6" />
          
          {/* Descrição do Produto */}
          <div className="text-sm text-neutral-600 space-y-4">
            <h4 className="font-medium text-neutral-900">Descrição</h4>
            <p>
              Peça chave para um guarda-roupa minimalista. Produzida em algodão premium com caimento estruturado e toque macio.
            </p>
            <ul className="list-disc list-inside mt-2 text-neutral-500">
              <li>100% Algodão Pima</li>
              <li>Modelagem Regular</li>
              <li>Produzido no Brasil</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}