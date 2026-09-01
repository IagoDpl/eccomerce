import Filter from "../../components/Filter";
import ProductList from "../../components/product/ProductList";

export default function ListPage() {
  // Lista temporária até a conexão com a API REST
  const mockProducts = [
    { 
      id: '1', 
      name: 'Camiseta Preta Essencial', 
      price: 129.90, 
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: '2', 
      name: 'Calça Jeans Reta', 
      price: 259.99, 
      imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: '3', 
      name: 'Jaqueta de Couro', 
      price: 899.90, 
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: '4', 
      name: 'Tênis Branco Clássico', 
      price: 399.00, 
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop' 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Cabeçalho da Categoria */}
      <div className="mb-8 bg-neutral-50 px-8 py-12 rounded-sm text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
          Coleção Atual
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto text-sm md:text-base">
          Descubra peças atemporais desenvolvidas com materiais premium para o seu dia a dia.
        </p>
      </div>

      {/* Barra de Filtros Horizontal */}
      <Filter />

      {/* Grid de Produtos */}
      <div className="mt-8">
        <ProductList products={mockProducts} />
      </div>
      
    </div>
  );
}