import React from 'react';
import { ICategory } from '../../store/types/category';
import classes from './categoryTree.scss';

type Props = {
    categories: ICategory[]
}

const CategoryTree:React.FC<Props> = ({ categories }: Props) => {
    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default CategoryTree;