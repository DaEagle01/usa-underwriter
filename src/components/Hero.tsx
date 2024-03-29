'use client';

import Image from "next/image";
import heroImagePerson from "../../public/assets/heroImagePerson.png";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const Hero = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselItems = [0, 1];

    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselItems.length - 1 ? 0 : currentSlider + 1), [carouselItems.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div>
            {/* <div className="bg-[#C81E1E] grid grid-cols-12 rounded-xl">
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center px-4 py-8 md:pl-[54px] md:pt-[67px] md:pb-[83px]">
                    <p className="text-3xl xl:text-5xl font-bold text-white uppercase">
                        Get affordable, same-day coverage in no time.
                    </p>
                    <p className="text-xs md:text-base font-medium text-white pt-4 pb-8 md:pb-10">
                        With roots over a century deep in the birthplace of the automobile industry, USA Underwriters has the knowledge and expertise to help tailor a policy to suit your lifestyle, your budget, and your priorities.
                    </p>
                    <div className="flex items-center">
                        <Button className="rounded-full px-6 sm:px-8 py-4 h-max bg-white hover:bg-gray-200 text-gray-800 hover:text-gray-900 text-base font-medium">
                            Report a Claim
                        </Button>
                        <Button className="rounded-full px-4 md:px-8 py-4 h-max bg-[#C81E1E] hover:bg-[#fa3232] text-[#E5E7EB] hover:text-[#f4f5f7] text-base font-medium flex items-center gap-2">
                            Learn More
                            <MoveRight />
                        </Button>
                    </div>
                </div>
                <div className="col-span-6 hidden md:flex justify-center items-end">
                    <Image src={heroImagePerson} alt="dummy person" />
                </div>
            </div> */}
            <div className="w-full h-[394px] md:h-[514px] relative overflow-hidden">
                <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                    {carouselItems.map((slide, inx) => (
                        <div key={slide} className="min-w-full h-[394px] md:h-[514px] object-cover bg-[#C81E1E] grid grid-cols-12 rounded-xl">
                            <div className="col-span-12 md:col-span-6 flex flex-col justify-center px-6 py-8 md:pl-[54px] md:pt-[67px] md:pb-[83px]">
                                <p className="text-3xl xl:text-5xl font-bold text-white uppercase">
                                    Get affordable, same-day coverage in no time.
                                </p>
                                <p className="text-xs md:text-base font-medium text-white pt-4 pb-8 md:pb-10">
                                    With roots over a century deep in the birthplace of the automobile industry, USA Underwriters has the knowledge and expertise to help tailor a policy to suit your lifestyle, your budget, and your priorities.
                                </p>
                                <div className="flex items-center">
                                    <Button className="rounded-full px-6 sm:px-8 py-4 h-max bg-white hover:bg-gray-200 text-gray-800 hover:text-gray-900 text-base font-medium">
                                        Report a Claim
                                    </Button>
                                    <Button className="rounded-full px-4 md:px-8 py-4 h-max bg-[#C81E1E] hover:bg-[#fa3232] text-[#E5E7EB] hover:text-[#f4f5f7] text-base font-medium flex items-center gap-2">
                                        Learn More
                                        <MoveRight />
                                    </Button>
                                </div>
                            </div>
                            <div className="col-span-6 hidden md:flex justify-center items-end">
                                <Image src={heroImagePerson} alt="dummy person" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-6 h-fit rounded-full gap-[14px] w-full ">
                {carouselItems.map((_, inx) => (
                    <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-300 ${inx === currentSlider ? "bg-[#6B7280]" : "bg-white"} border border-gray-600 w-4 h-4`}></button>
                ))}
            </div>
        </div>
    )
}

export default Hero