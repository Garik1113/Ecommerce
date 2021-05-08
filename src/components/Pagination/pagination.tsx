import React, { useMemo } from 'react';
import classes from './pagination.scss';

type Props = {
    pageControl: any,
    addQueryString: any,
    totalPages: number
}

const Pagination:React.FC<Props> = (props: Props) => {
    const { addQueryString, pageControl, totalPages } = props;
    if (totalPages < 1) {
        return null
    }
    const items = useMemo(() => {
        const arr = []
        for (let index = 0; index < totalPages; index++) {
           arr.push(index)
        }
        return arr
    }, [totalPages, addQueryString]);
    
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                {
                    items.map((e) => {
                        return (
                            <div className={classes.item}>
                                <button className={`${classes.circle} ${pageControl.page == e && classes.active}`} onClick={() => addQueryString("page", String(e))}>
                                    {e + 1}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pagination;