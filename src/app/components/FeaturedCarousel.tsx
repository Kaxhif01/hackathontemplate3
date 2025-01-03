"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";

import Link from "next/link";

// Featured Data
const feature = [
  { id: 1, img: "/images/f1.png", title: "Nike Air Force 1 Mid '07", title2: "Men's Shoes", price: "₹ 10 995" },
  { id: 2, img: "/images/f2.png", title: "Nike Court Vision Low Next Nature", title2: "Men's Shoes", price: "₹ 4 995" },
  { id: 3, img: "/images/f3.png", title: "Nike Air Force 1 PLT.AF.ORM", title2: "Women's Shoes", price: "₹ 8 995" },
  { id: 4, img: "/images/f4.png", title: "Nike Air Force 1 React", title2: "Men's Shoes", price: "₹ 13 295" },
  { id: 5, img: "/images/f5.png", title: "Air Jordan 1 Elevate Low", title2: "Women's Shoes", price: "₹ 11 895" },
{ id: 6, img: "/images/f6.png", title: "Nike Court Vision Low", title2: "Men's Shoes", price: "₹ 5 695" },
{ id: 7, img: "/images/f7.png", title: "Nike Dunk Low Retro SE", title2: "Men's Shoes", price: "₹ 9 695" },
{ id: 8, img: "/images/f8.png", title: "Nike Air Max SC", title2: "Men's Shoes", price: "₹ 12 695" },
{ id: 9, img: "/images/f9.png", title: "Nike Dunk Low Retro", title2: "Men's Shoes", price: "₹ 7 695" },
{ id: 10, img: "/images/f10.png", title: "Nike Air Max SC", title2: "Women's Shoes", price: "₹ 16 695" },
{ id: 11, img: "/images/f11.png", title: "Nike Air Force 1 PLT.AF.ORM", title2: "Women's Shoes", price: "₹ 8 995" },
{ id: 12, img: "/images/f12.png", title: "Nike Air Force 1 React", title2: "Men's Shoes", price: "₹ 13 295" },
];

export function FeaturedCarousel() {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="flex flex-wrap gap-y-10">
          {feature.map((item) => (
            
            <CarouselItem key={item.id} className=" md:basis-1/3 lg:basis-1/8">
              <Link href={""}>
              <div className="p-1">
                <Card>
                  <CardContent className=" bg-[#F5F5F5] aspect-square group p-0">
                   <Image src={item.img} alt={"shoes"} width={440} height={440}/>
                  </CardContent>
                  
                </Card>
              </div>
                  <div className=" mx-2 mt-2">
                      <h4 className="font-semibold text-[#9E3500] text-sm">Just In</h4>
                    <h1 className="font-semibold text-sm mt-2">{item.title}</h1>
                    <h3 className=" text-sm text-[#757575]">{item.title2}</h3>
                    <h4 className="text-sm text-[#757575]">1 Colour</h4>
                      <h2 className="font-medium text-sm mt-2">MRP : {item.price}</h2>
                  </div>
                  
                  </Link>
            </CarouselItem>
          ))}
          
        </CarouselContent>
        {/* <div className="absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
        <CarouselPrevious />
        <CarouselNext />
        </div> */}
     
      </Carousel>
    )
  }