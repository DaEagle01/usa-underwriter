'use client';

import { footerOptions } from "@/constants";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const FooterAccordion = () => {
    const [isOpen, setIsOpen] = useState<string | null>(null);

    const handleToggle = (title: string | null) => {
        setIsOpen((prev) => (prev === title ? null : title))
    };

    return (
        <>
            <div className=" bg-gray-800 py-8 px-3 flex flex-col gap-[22px]">
                {[0, 1].map((i) => (
                    <div key={i} className="border border-gray-400/10 rounded-lg">
                        {footerOptions.
                            slice((3 * i), (3 * (i + 1)))
                            .map((item, idx) => (
                                <div key={idx}>
                                    <div
                                        onClick={() => handleToggle(item.title)}
                                        className={`border border-gray-400/10 p-5 flex items-center gap-4`}
                                    >
                                        <div className="flex-1">
                                            <p className="font-medium text-base text-[#E5E7EB]">{item?.title}</p>
                                        </div>
                                        <div className={`duration-300 ease-in-out ${isOpen === item.title ? '-rotate-180 ' : ''}`}>
                                            <ChevronUp color="#ffffff" size={16} />
                                        </div>
                                    </div>
                                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === item.title ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className={`bg-gray-900 p-5 text-gray-400 flex flex-col gap-2`}>
                                                {
                                                    item.contactInfo.map((info, i) => (
                                                        <div key={info} className='font-normal text-base text-[#E5E7EB]'>
                                                            <p>{info}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FooterAccordion;