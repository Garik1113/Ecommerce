import React from 'react';
import { useShippingAddress } from 'src/talons/Checkout/useShippingAddress';
import Address from '../../components/Address';
import CheckoutTitle from './checkoutTitle';
import classes from './shippingAddress.scss';

type Props = {
    setStep: any
}
const ShippingAddress:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { handleSubmit } = useShippingAddress({setStep})

    return (
        <div className={classes.root}>
            <CheckoutTitle title="SHIPPING ADDRESS" number={1}/>
            <Address handleSubmit={handleSubmit}/>
        </div>
    )
}

export default ShippingAddress;