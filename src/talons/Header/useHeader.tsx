import { useState } from 'react';

export const useHeader = () => {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

    return {
        isSearchOpen, 
        setIsSearchOpen
    }
}