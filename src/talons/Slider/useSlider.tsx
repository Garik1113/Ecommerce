import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAxiosClient } from '../Axios/useAxiosClient'

export const useSlider = () => {
    const { axiosClient } = useAxiosClient();
    const [slider, setSlider] = useState<any>({});
    const fetchHomeSlider = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", 'sliders/get_home_slider');
        const { status, data } = response;
        if(status == 200 && data.slider) {
            setSlider(data.slider);
        }
    }, []);
    
    useEffect(() => {
        fetchHomeSlider()
    }, [fetchHomeSlider]);
    console.log(slider)
    return {
        slider
    }
}