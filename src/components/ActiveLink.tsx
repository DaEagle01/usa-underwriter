'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ route }: { route: { name: string, path: string } }) => {
    const pathname = usePathname()

    return (
        <Link key={route.name} href={route.path} className={cn("group flex flex-col mt-[2px]")}>
            <p className={`text-base font-medium text-nowrap ${route.path === pathname ? "text-red-600" : ""}`}>{route.name}</p>
            <span className="mt-[1px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
    )
}

export default ActiveLink