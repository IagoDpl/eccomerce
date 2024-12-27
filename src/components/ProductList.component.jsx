"use client"

import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <img
            src="https://img.pikbest.com/illustration/20240510/spirited-mothers-day-holiday-wishes-222024-png-images-png_10550693.jpg!w700wp"
            alt=""
            fill="true"
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <img
            src="https://i.pinimg.com/236x/dd/2d/ab/dd2dab0666b68523c1ec728db355ede4.jpg"
            alt=""
            fill="true"
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium"> Product Name</span>
          <span className="font-semibold">R$50</span>
        </div>
        <div className="text-sm text-gray-500"> Description</div>
        <button className="rounded-2xl ring-1 ring-pink-500 w-max text-pink-200 py-2 px-4 text-xs hover:bg-purple-700 hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <img
            src="https://img.pikbest.com/illustration/20240510/spirited-mothers-day-holiday-wishes-222024-png-images-png_10550693.jpg!w700wp"
            alt=""
            fill="true"
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <img
            src="https://i.pinimg.com/236x/dd/2d/ab/dd2dab0666b68523c1ec728db355ede4.jpg"
            alt=""
            fill="true"
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium"> Product Name</span>
          <span className="font-semibold">R$50</span>
        </div>
        <div className="text-sm text-gray-500"> Description</div>
        <button className="rounded-2xl ring-1 ring-pink-500 w-max text-pink-200 py-2 px-4 text-xs hover:bg-purple-700 hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <img
            src="https://img.pikbest.com/illustration/20240510/spirited-mothers-day-holiday-wishes-222024-png-images-png_10550693.jpg!w700wp"
            alt=""
            fill="true"
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <img
            src="https://i.pinimg.com/236x/dd/2d/ab/dd2dab0666b68523c1ec728db355ede4.jpg"
            alt=""
            fill="true"
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium"> Product Name</span>
          <span className="font-semibold">R$50</span>
        </div>
        <div className="text-sm text-gray-500"> Description</div>
        <button className="rounded-2xl ring-1 ring-pink-500 w-max text-pink-200 py-2 px-4 text-xs hover:bg-purple-700 hover:text-white">
          Add to cart
        </button>
      </Link>
      
    </div>
  );
};

export default ProductList;
