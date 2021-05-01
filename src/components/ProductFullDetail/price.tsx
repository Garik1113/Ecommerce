import React, { useMemo } from 'react';
import { IProduct } from 'src/interfaces/product';
import classes from './price.scss';

type Props = {
    product: IProduct
}
const Price:React.FC<Props> = (props: Props) => {
    const { product } = props;
    const { discountedPrice, price } = product;

    const content = useMemo(() => {
        if (discountedPrice) {
            return (
                <div className={classes.discountedField}>
                    <span className={classes.discounted}>
                        {discountedPrice}
                    </span>
                    <span className={classes.oldPrice}>
                        {price}
                    </span>
                </div>
            )
        } else {
            return (
                <div className={classes.priceField}>
                    <span className={classes.price}>
                        {price}
                    </span>
                </div>
            )
        }
    }, [discountedPrice, price])

    return (
        <div className={classes.root}>
            {content}
        </div>
    )
}

export default Price;