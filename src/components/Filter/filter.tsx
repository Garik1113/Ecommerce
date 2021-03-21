import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Button, Checkbox } from 'semantic-ui-react';
import { useFilter } from '../../talons/Filter/useFilter';
import classes from './filter.scss';


const Filter:React.FC = () => {
    const { filters } = useFilter();
    const history = useHistory();
    const handleChange = useCallback((data:any, filter:any) => {
        const search = history.location.search;
        if(data.checked) {
            if (search[0] == "?") {
                history.push(`${search}${filter.value}=${data.value}&`) 
            } else {
                history.push(`?${search}${filter.value}=${data.value}&`) 
            }
        } else {
            const path = search.replace(`${filter.value}=${data.value}&`, "");
            history.push(path ? path : "?")
        }
    }, [history]);

    const handleClearFilters = useCallback(() => {
        history.push("?")
    }, [history]);

    return (
        <div className={classes.root}>
            {
                filters.map((filter) => (
                    <div className={classes.filter} key={filter.id}>
                        <span className={classes.filterTitle}>{filter.title}</span>
                        <ul>
                            {filter.variants.map((variant) => (
                                <li key={variant.id}>
                                    <Checkbox 
                                        value={variant.value}
                                        onChange={(e, data) => handleChange(data, filter)}
                                    />
                                    {variant.label}
                                </li>
                            ))
                            } 
                        </ul>
                    </div>
                ))
            }
            <Button onClick={handleClearFilters} icon="remove">
                Clear Filters
            </Button>
        </div>
    )
};

export default Filter;