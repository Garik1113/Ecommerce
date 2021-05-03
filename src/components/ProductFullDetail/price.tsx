import React, { useMemo } from 'react';
import { IProduct } from 'src/interfaces/product';
import classes from './price.scss';

type Props = {
    product: IProduct,
    currency: any
}
const Price:React.FC<Props> = (props: Props) => {
    const { product, currency } = props;
    const { discountedPrice, price } = product;

    const content = useMemo(() => {
        if (discountedPrice) {
            return (
                <div className={classes.discountedField}>
                    <span className={classes.discounted}>
                        {discountedPrice} {currency.name}
                    </span>
                    <span className={classes.oldPrice}>
                        {price} {currency.name}
                    </span>
                </div>
            )
        } else {
            return (
                <div className={classes.priceField}>
                    <span className={classes.price}>
                        {price} {currency.name}
                    </span>
                </div>
            )
        }
    }, [discountedPrice, price, currency])

    return (
        <div className={classes.root}>
            {content}
        </div>
    )
}

export default Price;