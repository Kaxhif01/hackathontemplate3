"use client";

import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

import Link from "next/link";

// Air Max Data
export const airMax = [
  {
    id: 1,
    img: "/images/b1.png", // Fixed path for b1
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
  },
  {
    id: 2,
    img: "/images/b1.png", // Fixed path for b2
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
  },
  {
    id: 3,
    img: "/images/b3.png", // Fixed path for b3
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
  },
  {
    id: 4,
    img: "/images/b3.png", // Fixed path for b3
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
  },
];

// Carousel Component
export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {airMax.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={""}>
              <div className="p-1">
                <Card>
                  <CardContent className="bg-[#F5F5F5] aspect-square group">
                    {/* Using Image Component */}
                    <Image
                      src={item.img} // Updated to direct path
                      alt={"shoes"}
                      width={440}
                      height={440}
                      priority={true} // Optimized loading
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-between mx-2 mt-2">
                <h1 className="font-semibold text-sm">{item.title}</h1>
                <h2 className="font-semibold text-sm">{item.price}</h2>
              </div>
              <h3 className="ml-2 text-sm">{item.title2}</h3>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
