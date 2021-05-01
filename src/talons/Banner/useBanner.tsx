import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAxiosClient } from '../Axios/useAxiosClient';

type Props = {
    bannerId: string
}

export const useBanner = (props: Props) => {
    const { bannerId } = props;
    const { axiosClient } = useAxiosClient();
    const [banner, setBanner] = useState();
    const fetchBanner = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `banners/${bannerId}`);
        const { status, data } = response;
        if(status == 200 && data.banner) {
            setBanner(data.banner)
        }
    }, [bannerId]);

    useEffect(() => {
        fetchBanner()
    }, [bannerId]);

    return {
        banner
    }
}