'use client';
import { Menu, X } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import { mobileNavPublicRoutes } from "@/constants"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react";

const MobileNavbarDrawer = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <div onClick={() => setOpenNav(openNav ? false : true)}>
            <Sheet open={openNav}>
                {
                    openNav ? (
                        <SheetClose asChild>
                            <button className="" onClick={() => setOpenNav(false)}>
                                <X />
                            </button>
                        </SheetClose>
                    ) : (
                        <SheetTrigger asChild>
                            <button className="" onClick={() => setOpenNav(true)}>
                                <Menu />
                            </button>
                        </SheetTrigger>
                    )
                }
                <SheetContent side="top" className="z-[1000] mt-[68px] px-3 py-4 bg-red-700">
                    <ul className="menu p-4 w-full min-h-full text-base-content space-y-11">
                        {
                            mobileNavPublicRoutes.map(route => (
                                <Link key={route.name} href={route.path} className={cn("block w-full")}>
                                    <SheetClose asChild className="w-full">
                                        <p className="text-base font-medium text-[#E5E7EB]">
                                            {route.name}
                                        </p>
                                    </SheetClose>
                                </Link>
                            ))
                        }
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbarDrawer