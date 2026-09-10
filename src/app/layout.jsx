import Navbar from "../components/layout/Navbar"; // Ajuste o caminho se necessário
import Footer from "../components/layout/Footer"; // Ajuste o caminho se necessário
import "./globals.css";

export const metadata = {
  title: "Moda | E-commerce",
  description: "Minimalist fashion store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-neutral-900 antialiased min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}