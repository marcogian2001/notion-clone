import React from "react";
import { useEffect } from "react";

export const useScrollTop = (treshold=10) => {
    const [scrolled, setScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > treshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [treshold]);

    return scrolled;
}