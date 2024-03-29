import { footerOptions } from '@/constants'
import { ChevronsUp, Clock3, Mail, Phone } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import ScrollToTopButton from '../ScrollToTopButton'
import FooterAccordion from '../FooterAccordion'

const Footer = () => {
    return (
        <div className='w-full h-full max-w-[90rem] mx-auto'>
            <div className='hidden md:block px-3 md:px-8 lg:px-28 pt-[74px] pb-20 bg-gray-800 relative'>
                <div className='grid grid-cols-12 gap-[72px]'>
                    {
                        footerOptions.map((item, index) => (
                            <div key={item.title} className='col-span-4 flex flex-col gap-3 leading-[150%]'>
                                <p className='text-white font-semibold text-xl'>
                                    {item.title}
                                </p>
                                <div className='flex flex-col gap-2'>
                                    {
                                        item.contactInfo.map((info, i) => (
                                            <div key={info} className='font-normal text-sm text-white flex items-center gap-[6px]'>
                                                {index !== 0 && (
                                                    <div className='text-gray-800'>
                                                        {i === 0 && <Clock3 fill='#ffffff' size={16} />}
                                                        {i === 1 && <Phone fill='#ffffff' size={16} />}
                                                        {i === 2 && <Mail fill='#ffffff' size={16} />}
                                                    </div>
                                                )}
                                                <p className='break-words'>{info}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='hidden md:block'></div>
                <ScrollToTopButton />
            </div>
            <div className='block md:hidden -mb-1'>
                <FooterAccordion />
            </div>
            <div className='relative flex flex-col md:flex-row md:justify-between items-center gap-3 px-3 md:px-8 lg:px-20 py-4 bg-gray-800 md:bg-gray-200 text-xs md:text-sm text-[#EBF5FF] md:text-[#111928] font-normal'>
                <p className='hidden md:block'>
                    Copyright 2022 USA Underwriters {" "}
                    <span className='font-semibold'>| Privacy Policy | Terms of Use</span>
                </p>
                <p className='block md:hidden text-center leading-[150%]'>
                    Copyright 2022 USA Underwriters  <br />  Privacy Policy | Terms of Use
                </p>
                <p className='font-medium md:font-normal'>
                    ( Built by Neutrix - Powered by Neutrix Systems )
                </p>
                <div className='block md:hidden'><ScrollToTopButton /></div>
            </div>
        </div>
    )
}

export default Footer