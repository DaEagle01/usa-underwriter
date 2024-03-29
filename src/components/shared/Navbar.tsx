
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { mobileNavPublicRoutes, publicRoutes } from "@/constants";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import MobileNavbarDrawer from "../MobileNavbarDrawer";

const Navbar = () => {

    return (
        <header className="fixed z-[100] top-0 h-[68px] sm:h-[84px] w-full bg-white border-b">
            <nav className="w-full h-full max-w-[90rem] mx-auto flex justify-between items-center gap-4 px-3 md:px-8 lg:px-20 py-4">
                <Link href="/" className="flex-grow md:flex-grow-0 flex-shrink-0 flex justify-center ml-9 md:ml-0">
                    <Image className="h-[42px] sm:h-[46px] rounded-md" width={91} height={46} src={logo} alt="" />
                </Link>
                <div className="space-x-4 md:space-x-8 lg:space-x-16 hidden md:flex items-center">
                    {
                        publicRoutes.map(route => (
                            <Link key={route.name} href={route.path} className={cn("group flex flex-col mt-[2px]")}>
                                <p className="text-base font-medium text-nowrap">{route.name}</p>
                                <span className="mt-[1px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))
                    }
                    <Button className="rounded-full px-5 py-[10px] h-max bg-[#C81E1E] hover:bg-[#fa3232] text-[#E5E7EB] hover:text-[#f4f5f7] text-xs sm:text-base font-medium">
                        Report a Claim
                    </Button>
                </div>
                <div className="flex items-center gap-4 md:hidden drawer drawer-end w-max">
                    <MobileNavbarDrawer />
                </div>
            </nav>
        </header>
    )
}

export default Navbar