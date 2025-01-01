"use client";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList.component";


const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-between gap-8"></div>
        <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
          Grab up to 50% off on <br />
          Selected Products
        </h1>
        <button className="rounded-3xl bg-pink-500 text-white w-max py-3 px-5 text-sm">
          BUY NOW
        </button>
        <div className="relative w-1/3">
          <Image
            src="https://previews.123rf.com/images/imagecatalogue/imagecatalogue1701/imagecatalogue170105992/70331139-testing-text-rubber-seal-stamp-watermark-caption-inside-rectangular-banner-with-grunge-design-and.jpg"
            alt=""
            fill="true"
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter></Filter>
      {/* PRODUCTS*/}
      <h1 className="mt-12 text-xl font-semibold">PRA VOCÊ</h1>
      <ProductList></ProductList>
    </div>
  );
};

export default ListPage;
