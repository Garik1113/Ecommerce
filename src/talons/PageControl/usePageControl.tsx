import { useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router';
import queryString from 'query-string';

export const usePageControl = () => {
    const history = useHistory();
    const queryParams = queryString.parse(history.location.search);
    const params:any = useParams();
    const { id } = params;
    const updateQueryStringParameter = useCallback((uri:string, key:string, value:string):string => {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
          return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
          return uri + separator + key + "=" + value;
        }
    }, []);
    const addQueryString = useCallback((key:string, value: string) => {
        if(key == "date") {
            const withoutPage = updateQueryStringParameter(history.location.search, "page", "0");
            const newUrl =  updateQueryStringParameter(withoutPage, "date", value);
            history.push(newUrl)
        } else {
            const url: string = updateQueryStringParameter(history.location.search, key, value);
            history.push(url)
        }
        
    }, [history]);

    const pageControl = useMemo(() => {
        return {
            categoryName: queryParams.name || "",
            category: queryParams.category || "",
            page: queryParams.page || 0,
            perPage: queryParams.perPage || 9,
            date: queryParams.date,
            categoryId: id,
            price_min: queryParams.price_min,
            price_max: queryParams.price_max,
            product_name: queryParams.product_name
        } 
    }, [queryParams, addQueryString, params]);

    return {
        pageControl,
        addQueryString
    }
}