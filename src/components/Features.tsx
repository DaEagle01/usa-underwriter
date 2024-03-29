'use client';

import { Button } from "./ui/button"
import { features } from "@/constants";
import FeatureCard from "./FeatureCard";
import { useCallback, useEffect, useState } from "react";

const Features = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselItems = features;

    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselItems.length - 1 ? 0 : currentSlider + 1), [carouselItems.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="pt-11 md:pt-[72px] pb-4 md:pb-[87px] flex flex-col gap-3 md:gap-10">
            <div className="grid grid-cols-12 gap-[34px]">
                <div className="col-span-12 md:col-span-5 text-center md:text-left">
                    <h1 className="text-sm md:text-base font-medium text-[#374151]">
                        Our Features
                    </h1>
                    <h2 className="text-xl md:text-3xl leading-[150%] font-semibold text-[#111928]">
                        MCCA REFUND INFORMATION
                    </h2>
                    <Button className="mt-4 md:mt-6 rounded-full md:px-8 py-4 h-max bg-red-700 hover:bg-red-600 text-[#E5E7EB] hover:text-[#f4f5f7] text-base font-medium flex items-center gap-2 w-full md:w-max">
                        MCCA Refund FAQ
                    </Button>
                </div>
                <div className="col-span-12 md:col-span-7 flex justify-end">
                    <p className="text-xs md:text-base font-medium text-[#6B7280] w-full md:w-[91%]">
                        The Michigan Catastrophic Claims Association approved refunds for certain Michigan Policyholders due a surplus of funds being held by the MCCA. The approved refund will be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or $80 if the vehicle is an insured historical vehicle.
                    </p>
                </div>
            </div>
            <div className="hidden md:grid grid-cols-12 gap-8">
                {features.map(feature => (
                    <FeatureCard key={feature.title} feature={feature} />
                ))}
            </div>
            <div className="block md:hidden w-full h-[215px] relative overflow-hidden">
                <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                    {carouselItems.map((feature, inx) => (
                        <div key={feature.title} className="min-w-full h-[215px] object-cover  grid grid-cols-12 rounded-xl">
                            <FeatureCard feature={feature} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex md:hidden justify-center h-fit rounded-full gap-[14px] w-full">
                {carouselItems.map((item, inx) => (
                    <button key={item.title} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-300 ${inx === currentSlider ? "bg-[#6B7280]" : "bg-white"} border border-gray-600 w-4 h-4`}></button>
                ))}
            </div>
        </div>
    )
}

export default Features