import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Moda | E-commerce",
  description: "Minimalist fashion store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-neutral-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}