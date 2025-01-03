"use client";

import { FaHeart } from 'react-icons/fa'; 
import { MdDelete } from "react-icons/md";


import Image from "next/image";

export default function CartPage() {
  return (
    <main className="container mx-auto p-6">
      {/* Free Delivery Section */}
      <section className="border p-4 mb-4 bg-gray-50 text-sm">
        <p>
          <strong>Free Delivery</strong>
        </p>
        <p>Applies to orders of ₹14,000.00 or more. <a href="#" className="underline">View details</a></p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bag Section */}
        <section className="md:col-span-2">
          <h1 className="text-xl font-semibold mb-4">Bag</h1>

          {/* Item 1 */}
          <div className="border-b pb-4 mb-4">
            <div className="flex gap-4">
              <Image src="/images/b1.png" alt="Item 1" width={100} height={100} className="border" />
              <div className="flex-grow">
                <h2 className="font-medium">Nike Dri-FIT ADV Techknit Ultra</h2>
                <p className="text-sm text-gray-500">Mens Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm mt-2">Size: L &nbsp; Quantity: 1</p>
              </div>
              <p className="font-medium">MRP: ₹ 3,895.00</p>
            </div>
            <div className="flex gap-4 mt-4 text-sm text-gray-500">
               <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
               <MdDelete className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
            </div>
          </div>

          {/* Item 2 */}
          <div className="border-b pb-4 mb-4">
            <div className="flex gap-4">
              <Image src="/images/b3.png" alt="Item 2" width={100} height={100} className="border" />
              <div className="flex-grow">
                <h2 className="font-medium">Nike Air Max 97 SE</h2>
                <p className="text-sm text-gray-500">Mens Shoes</p>
                <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm mt-2">Size: 8 &nbsp; Quantity: 1</p>
              </div>
              <p className="font-medium">MRP: ₹ 16,995.00</p>
            </div>
            <div className="flex gap-4 mt-4 text-sm text-gray-500">
              <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
              <MdDelete className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="border p-6 bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₹ 20,890.00</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-medium mb-4">
            <span>Total</span>
            <span>₹ 20,890.00</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
            Member Checkout
          </button>
        </section>
      </div>
    </main>
  );
}
