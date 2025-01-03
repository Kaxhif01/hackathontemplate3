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

// Gear Data (Updated with direct paths)
export const gear2 = [
  {
    id: 1,
    img: "/images/g1.png", // Fixed path for g1
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
  },
  {
    id: 2,
    img: "/images/g2.png", // Fixed path for g2
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
  },
  {
    id: 3,
    img: "/images/g3.png", // Fixed path for g3
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
  },
  {
    id: 4,
    img: "/images/g4.png", // Fixed path for g4
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
  },
];

// Gear Carousel Component
export function GearCarousel2() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {gear2.map((item) => (
          <CarouselItem key={item.id} className="lg:basis-1/2">
            <Link href={""}>
              <div className="p-1">
                <Card>
                  <CardContent className="bg-[#F5F5F5] aspect-square group">
                    {/* Image Component with Correct Paths */}
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
      <div className="absolute bottom-[390px] md:bottom-[430px] md:right-14 right-14 lg:bottom-[310px] xl:bottom-[380px]">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
