import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { State } from "src/store"
import { fetchLocations } from "src/store/actions/app/asyncActions";

export const useAddress = () => {
    const locations = useSelector((state: State) => state.app.locations);
    const { countries, cities, states } = locations;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLocations())
    }, []);

    const countryOptions = useMemo(() => {
        return countries ? countries.map(c => {
            return {
                text: c.name,
                value: c.name,
                id: c.id
            }
        }) : []
    }, [countries]);

    const stateOptions = useMemo(() => {
        return states ? states.map(c => {
            return {
                text: c.name,
                value: c.name,
                id: c.id
            }
        }) : []
    }, [states]);
console.log(states)
    const cityOptions = useMemo(() => {
        return cities ? cities.map(c => {
            return {
                text: c.name,
                value: c.name,
                id: c.id
            }
        }) : []
    }, [cities]);

    return {
        countryOptions,
        cityOptions,
        stateOptions
    }
}