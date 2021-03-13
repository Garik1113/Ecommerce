import React from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import Address from '../../components/Address';
import CheckoutTitle from './checkoutTitle';
import classes from './billingAddress.scss';
import { useBillingAddress } from 'src/talons/Checkout/useBillingAddress';

type Props = {
    billingAndShippingAreTheSame: boolean,
    handleChange: any,
    setStep: any
}

const BillingAddress:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { billingAndShippingAreTheSame, handleChange, handleSubmit } = useBillingAddress({setStep})
    return (
        <div className={classes.root}>
            <CheckoutTitle title="BILLING ADDRESS" number={2}/>
            <div className={classes.checkboxField}>
                <Checkbox onChange={handleChange} checked={billingAndShippingAreTheSame}/>
                <span>Billing and shipping address are the same</span>
            </div>
            {
                billingAndShippingAreTheSame ? null : <Address handleSubmit={handleSubmit}/>
            }
            <Button onClick={() => setStep("shipping")}>
                Back
            </Button>
            <Button onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    )
}

export default BillingAddress;