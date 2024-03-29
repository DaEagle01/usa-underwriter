'use client';

import { ChevronRight, Home } from 'lucide-react'
import React from 'react'
import homeIcon from "../../../public/assets/homeIcon.png";
import aboutUsImage from "../../../public/assets/aboutUsImage.png";
import Image from 'next/image';
import { features } from '@/constants';
import FeatureCard from '@/components/FeatureCard';
import { useCallback, useEffect, useState } from "react";

const AboutUs = () => {
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
        <div className='w-full h-full max-w-[90rem] mx-auto px-3 md:px-8 lg:px-20 pt-8 md:pt-[26px] pb-10 md:pb-16 leading-[150%]'>
            <div className='flex flex-col items-center gap-2 md:gap-[18px]'>
                <h1 className='text-[#111928] md:text-[#212529] font-semibold md:font-medium text-xl md:text-4xl'>About us</h1>
                <div className='flex items-center gap-1 md:gap-4'>
                    <Image src={homeIcon} alt="home icon" width={16} />
                    <h1 className='text-[#374151] font-normal text-sm'>About us</h1>
                    <ChevronRight size={20} strokeWidth={2.5} color='#6B7280' />
                    <h1 className='text-[#6B7280] font-normal text-sm'>About us</h1>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-[6px] md:gap-[78px] pt-[26px] md:pt-[66px] pb-4 md:pb-[50px]'>
                <div>
                    <h1 className='hidden md:block font-medium text-base text-[#374151]'>
                        About us
                    </h1>
                    <p className='font-semibold text-3xl text-[#111928]'>
                        History
                    </p>
                </div>
                <p className='hidden md:block font-medium text-base text-[#6B7280]'>
                    In 1962, the Southern Michigan Mutual Insurance Company celebrated it’s 100th year in continuous operation and was presented with a plaque by the State of Michigan as a Centenary Business.
                </p>
                <p className='block md:hidden font-medium text-xs md:text-base text-[#6B7280]'>
                    In 1962, the Southern Michigan Mutual Insurance Company celebrated it’s 100th year in continuous operation
                </p>
            </div>
            <div className='relative'>
                <Image src={aboutUsImage} className='w-full rounded-md' alt='dummy about us image' />
            </div>
            <div className='pt-4 md:pt-[50px]'>
                <div className='hidden md:block space-y-4'>
                    <p className='text-base font-medium text-[#6B7280]'>
                        In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name may have changed, but the dedication to our customers, our drive to serve them and their communities hasn’t. USA Underwriters’ mission as a leading Property and Casualty Insurance company in Michigan, remains largely unchanged from the mission of it’s progenitor: to provide affordable, quality insurance solutions to families and individuals.
                    </p>
                    <p className='text-base font-medium text-[#6B7280]'>
                        Insurance has changed a lot in the last century and a half. When Southern Michigan Mutual Insurance Company was founded, automobiles simply didn’t exist.
                        That all changed — right in the company’s back yard — at the turn of the 20th century when Henry Ford’s Model T began rolling off the assembly line.
                    </p>
                    <p className='text-base font-medium text-[#6B7280]'>
                        In an instant of history, the car supplanted the horse and buggy as American’s primary mode of transportation. The era of the Automobile had begun, and the Southern Michigan Mutual Insurance Company was front and center for one of the most dramatic shifts in American history. The car accelerated economic growth, and offered a freedom of travel that had been nigh-unimaginable for the vast majority of people through the whole of human history.
                    </p>
                </div>
                <p className='block md:hidden text-xs md:text-base font-medium text-[#6B7280]'>
                    In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name may have changed, but the dedication to our customers, our drive to serve them and their communities hasn’t.
                </p>
            </div>
            <div className='grid grid-cols-12 gap-1 md:gap-0 py-4 md:py-[63px]'>
                <div className='col-span-12 md:col-span-6'>
                    <h1 className='font-normal md:font-medium text-sm md:text-base text-[#374151] md:text-[#374151]'>
                        Believe
                    </h1>
                    <p className='font-semibold text-xl md:text-3xl text-[#C81E1E]'>
                        OUR MISSION
                    </p>
                </div>
                <p className='hidden md:block md:col-span-6 font-medium text-base text-[#6B7280]'>
                    Our mission has remained largely unchanged over the century and a half the company has operated: to quickly provide affordable insurance solutions for our customers that support the communities and families they represent.
                </p>
                <p className='block md:hidden col-span-12 font-medium text-xs md:text-base text-[#6B7280]'>
                    Our mission has remained largely unchanged over the century and a half the company has operated: to quickly provide affordable insurance solutions
                </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-10 pt-6">
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
        </div>
    )
}

export default AboutUs