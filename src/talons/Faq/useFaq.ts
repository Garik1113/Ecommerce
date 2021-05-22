import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { IFaq } from 'src/interfaces/faq';
import { useAxiosClient } from '../Axios/useAxiosClient';

export const useFaq = () => {
    const { axiosClient } = useAxiosClient();
    const [faqs, setFaqs] = useState<IFaq[]>([]);

    const fetchFaqs = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `faqs/`);
        const { data } = response;
        if (data && data.faqs) {
            setFaqs(data.faqs);
        }
    }, [setFaqs, axiosClient]);

    useEffect(() => {
        fetchFaqs()
    }, []);

    return {
        faqs
    }
}