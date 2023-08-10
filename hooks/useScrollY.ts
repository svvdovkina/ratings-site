import { useEffect, useState } from "react";

export const useScrollY = ():[number, number] =>{
    const isBrowser = typeof window !== 'undefined';

    const [skrollY, setScrollY] = useState<number>(0);
    const [vh, setVh] = useState(0);
    

    const handleScroll = ()=>{
        if(isBrowser) {
            setScrollY(window.scrollY)
            setVh(Math.max(document?.documentElement.clientHeight || 0, window?.innerHeight || 0))
        }
    }


    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, {passive: true})
        
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);

    return [skrollY, vh]
}