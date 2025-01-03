import { Button } from "./ui/button"
import Image from "next/image"
export default function DontMiss(){
    return(
      <section className="my-20">
      <h1 className="font-semibold text-xl mb-3 ml-2">Dont Miss</h1>
      <div className="relative h-screen w-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/dontmiss.png"}
          alt={"flight"}
          layout="fill" /* Makes the image responsive and fill the container */
          objectFit="cover" /* Ensures the image covers the container without distortion */
          priority
        />
      </div>
     
      </div>

      <div className="flex flex-col justify-center items-center space-y-5 pt-10">
          <h1 className="font-semibold text-2xl md:text-4xl">FLIGHT ESSENTIALS</h1>
          <h2 className="text-[9px] md:text-sm">Your built-to-last,all-week wears—but with style only Jordan Brand can deliver.</h2>
          <Button className="rounded-full">Shop</Button>
      </div>
  </section>
    )
}