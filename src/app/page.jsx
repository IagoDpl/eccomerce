import Slider from "../components/Slider";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/product/ProductList";

export default function HomePage() {
  // Lista de produtos fictícios para visualizarmos a interface
  const mockProducts = [
    { 
      id: '1', 
      name: 'Camiseta Preta Essencial', 
      category: 'Camisetas', 
      price: 129.90, 
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '2', 
      name: 'Calça Jeans Reta', 
      category: 'Calças', 
      price: 259.99, 
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '3', 
      name: 'Tênis Branco Clássico', 
      category: 'Calçados', 
      price: 399.00, 
      inStock: false,
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '4', 
      name: 'Jaqueta de Couro', 
      category: 'Casacos', 
      price: 899.90, 
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen">
      <Slider />
      <CategoryList />
      <ProductList products={mockProducts} />
    </main>
  );
}