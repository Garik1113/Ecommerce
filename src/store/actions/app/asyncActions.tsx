import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react"
import { BACKEND_URL } from "src/config/defaults";
import { AppActions, FETCH_CONFIGS, FETCH_LOCATIONS } from "src/store/types/app"

export const fetchLocations = () => async(dispatch: Dispatch<AppActions>) => {
    const response: AxiosResponse = await axios.get(
        `${BACKEND_URL}/locations/`);
    const { data, status } = response;
    if (data && status == 200) {
        dispatch({
            type: FETCH_LOCATIONS,
            locations: {
                countries: data.countries,
                states: data.states,
                cities: data.cities
            }
        })
    }
    
}

export const fetchConfigs = () => async(dispatch: Dispatch<AppActions>) => {
    const response: AxiosResponse = await axios.get(
        `${BACKEND_URL}/configs/`);
    const { data, status } = response;
    if (data && status == 200) {
        dispatch({
            type: FETCH_CONFIGS,
            configs: data.config
        })
    }
}