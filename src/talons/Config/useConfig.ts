import { useCallback } from "react";
import { useSelector } from "react-redux";
import { State } from "src/store";

export const useConfig = () => {
    const configs = useSelector((state: State) => state.app.configs)
    const getConfigValue = useCallback((configName: string) => {
        return configs[configName] || ""
    }, [configs]);

    return {
        getConfigValue
    }
}