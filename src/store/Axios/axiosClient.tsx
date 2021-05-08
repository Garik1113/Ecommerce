import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { BACKEND_URL } from "src/config/defaults";

export const getAxiosClient = (token: string | null) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const axiosClient = async(method: Method, url: string, data?: any) => {
        const config: AxiosRequestConfig = {
            headers,
            method,
            url: `${BACKEND_URL}/${url}`,
            data
        }
        const response: AxiosResponse = await axios(config);
        return response;
    }

    return {
        axiosClient
    }
}