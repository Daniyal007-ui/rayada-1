"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OrderForm from "./OrderForm";
import { buttonVariants } from "@/components/ui/button";


export default function Hero() {
    {/*const [quantity, setQuantity] = useState<1 | 2 | 3>(1);

    // Price mapping based on quantity
    const priceMapping: { 1: number; 2: number; 3: number } = {
        1: 160,
        2: 250,
        3: 350
    };

    // Handle quantity change
    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(parseInt(e.target.value) as 1 | 2 | 3);
    };*/}

    const [mainImage, setMainImage] = useState("/pic1.webp");

    // Function to change the main image when a thumbnail is clicked
    const handleThumbnailClick = (src: string) => {
        setMainImage(src);
    }

    return (
    
            <div className="h-auto w-full bg-gradient-to-r from-gray-400 to-gray-700 flex flex-col sm:flex-row  justify-around items-center py-10 px-4 sm:px-6 md:px-12">
                {/* Image Section */}
                <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-6 sm:mb-0">
                    <div className="md:w-full sm:w-1/2 mb-4">
                        <Image src={mainImage} alt="RealMaddridCream" width={400} height={300} className="h-auto w-full object-cover" />
                    </div>
                    <div className="flex space-x-3 mb-2 md:ml-5 sm:mb-0 sm:ml-0">
                        <div onClick={() => handleThumbnailClick("/pic2.webp")} className="cursor-pointer">
                            <Image src={"/pic2.webp"} alt="pic1" height={100} width={100} className="rounded-md" />
                        </div>
                        <div onClick={() => handleThumbnailClick("/pic3.webp")} className="cursor-pointer">
                            <Image src={"/pic3.webp"} alt="pic2" height={100} width={100} className="rounded-md" />
                        </div>
                        <div onClick={() => handleThumbnailClick("/pic4.webp")} className="cursor-pointer">
                            <Image src={"/pic4.webp"} alt="pic3" height={100} width={100} className="rounded-md" />
                        </div>
                        <div onClick={() => handleThumbnailClick("/sizechart.webp")} className="cursor-pointer">
                            <Image src={"/sizechart.webp"} alt="size chart" height={90} width={90} className="rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
                    <h1 className=" font-bold text-2xl sm:text-3xl text-white">Real Madrid Home </h1>
                    <p className="text-xl text-gray-300 mt-2">
                    Real Madrid Home Shirt 24/25 – Wear the Legacy

                    </p>
                    <h2 className="text-white font-bold text-xl sm:text-2xl mt-4">PRICE</h2>

                    {/* Quantity Dropdown 
                    <div className="mt-4">
                        <label htmlFor="quantity" className="font-bold text-lg text-cyan-800">Select Quantity:</label>
                        <select
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="ml-2 text-cyan-500 p-2 border border-cyan-300 rounded"
                        >
                            <option value={1}>1 PCS</option>
                            <option value={2}>2 PCS</option>
                            <option value={3}>3 PCS</option>
                        </select>
                    </div>
                     Total Price Display */}
                    <div className="mt-4">
                        <p className="font-bold text-lg ">Price: 105 SAR</p>
                        <p className="font-bold italic text-lg  animate-flash shadow-lg">Buy more than 1 and get a huge discount </p>
                    </div>

                    <h2 className="text-white font-bold mt-4 text-xl">DESCRIPTION:</h2>
                    <p className="text-gray-300 mt-2">
                    The Real Madrid Home Shirt 24/25 is crafted for passionate fans who value style and performance.
                     Made with Dri-Fit polyester fabric, it’s designed to wick sweat and dry quickly,
                     keeping you comfortable whether you’re on the field or in the stands.
                    </p>

                    <Link href={'https://api.whatsapp.com/send/?phone=971561050047&text=hello&type=phone_number&app_absent=0'} className={buttonVariants({ variant: "outline" })}>Customer Support</Link>
                
                    </div>
                   


                    <OrderForm />
                </div>
            
            );
}
