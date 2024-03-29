'use client';

import { ChevronsUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Button onClick={handleScrollToTop} size="icon" className="absolute bottom-11 md:bottom-[10px] right-4 md:right-[30px] w-9 h-9 bg-red-700 hover:bg-red-500 flex justify-center items-center rounded">
            <ChevronsUp color="#ffffff" strokeWidth={3} className="h-4 w-4" />
        </Button>
    )
}

export default ScrollToTopButton