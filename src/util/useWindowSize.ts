import { useEffect, useState } from 'react';


const getSize = () => {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
    };
};

export interface WindowSize {
    innerHeight: number,
    innerWidth: number,
    outerHeight: number,
    outerWidth: number
}

export const useWindowSize = ():WindowSize => {
    const [windowSize, setWindowSize] = useState(getSize());

    const handleResize = () => {
        setWindowSize(getSize());
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [window, handleResize]);

    return windowSize;
}

