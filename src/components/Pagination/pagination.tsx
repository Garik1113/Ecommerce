import React, { useMemo } from 'react';
import classes from './pagination.scss';

type Props = {
    pageControl: any,
    addQueryString: any,
    totalPages: number
}

const Pagination:React.FC<Props> = (props: Props) => {
    const { addQueryString, pageControl, totalPages } = props;
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
                {/* {items} */}
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
                {/* <div className={classes.item}>
                    <button className={`${classes.circle} ${pageControl.page == 0 && classes.active}`} onClick={() => addQueryString("page", "0")}>
                        1
                    </button>
                </div>
                <div className={classes.item}>
                    <button className={`${classes.circle} ${pageControl.page == 1 && classes.active}`} onClick={() => addQueryString("page", "1")}>
                        2
                    </button>
                </div>
                <div className={classes.item}>
                    <button className={`${classes.circle} ${pageControl.page == 2 && classes.active}`} onClick={() => addQueryString("page", "2")}>
                        3
                    </button>
                </div>
                <div className={classes.item}>
                    <button className={`${classes.circle} ${pageControl.page == 3 && classes.active}`} onClick={() => addQueryString("page", "3")}>
                        4
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Pagination;