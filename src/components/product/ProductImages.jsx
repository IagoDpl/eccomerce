export default function ProductImages() {
  // Imagens mockadas para visualizar o grid de moda
  const images = [
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1434389678232-0408541546ce?q=80&w=1200&auto=format&fit=crop"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      {images.map((img, index) => (
        <div 
          key={index} 
          // A primeira imagem ocupa as duas colunas no desktop para maior impacto
          className={`relative w-full aspect-[3/4] bg-neutral-100 ${
            index === 0 ? "md:col-span-2" : ""
          }`}
        >
          <img
            src={img}
            alt={`Detalhe da peça ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}