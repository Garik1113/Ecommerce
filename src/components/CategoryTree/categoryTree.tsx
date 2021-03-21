import React from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../../interfaces/category';
import classes from './categoryTree.scss';

type Props = {
    categories: ICategory[],
    handleCloseDrawer: any
}

const CategoryTree:React.FC<Props> = (props: Props) => {
    const { categories=[], handleCloseDrawer } = props;

    return (
        <div className={classes.root}>
            {
                categories.map(e => (
                    <div className={classes.item} key={String(e._id)}>
                        <Link to={`/category/${e._id}?name=${e.name}`} className={classes.link} onClick={handleCloseDrawer}>
                            {e.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryTree;