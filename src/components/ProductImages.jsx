"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/3403896/pexels-photo-3403896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/29625537/pexels-photo-29625537/free-photo-of-caneca-festiva-de-natal-com-design-de-papai-noel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/29904630/pexels-photo-29904630.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/29851701/pexels-photo-29851701/free-photo-of-elegante-exposicao-de-sobremesas-com-toque-brilhante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function ProductImages() {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
          <Image
            src={images[index].url}
            alt=""
            fill="true"
            size="50vw"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
          {images.map((img, i) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={img.id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.url}
                alt=""
                fill="true"
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
    </div>
  );
}

export default ProductImages;
