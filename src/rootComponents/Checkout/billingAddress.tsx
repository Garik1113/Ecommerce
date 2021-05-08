import React, { useMemo } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import Address from '../Account/Addresses/address';
import AddressForm from 'components/Address';
import CheckoutTitle from './checkoutTitle';
import classes from './billingAddress.scss';
import { useBillingAddress } from 'src/talons/Checkout/useBillingAddress';
import { IAddress } from 'src/interfaces/address';

type Props = {
    billingAndShippingAreTheSame: boolean,
    handleChange: any,
    setStep: any
}

const BillingAddress:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { 
        billingAndShippingAreTheSame, 
        handleChange, 
        handleSubmit, 
        billingAddress,
        shippingAddress,
        isSignedIn,
        addresses,
        selectedAddress, 
        setSelectedAddress
    } = useBillingAddress({setStep});

    const addressContent = useMemo(() => {
        if (isSignedIn && addresses.length) {
            return (
                <div>
                    <div className={classes.list}>
                        {addresses.map((a: IAddress, i) => (
                            <div 
                                className={`${classes.address} ${selectedAddress && selectedAddress._id == a._id ? classes.selected: null}`} 
                                onClick={() => setSelectedAddress(a)}
                            >
                                <Address 
                                    address={a} 
                                    key={i} 
                                    inCheckout={true}
                                    handleDeleteAddress={() => {}}
                                    handleEditAddress={() => {}}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={classes.button}>
                        <Button onClick={() => handleSubmit(null)} primary disabled={!selectedAddress}>Submit</Button>
                    </div>
                </div>
            )
        } else {
            return <AddressForm handleSubmit={handleSubmit} address={billingAddress}/> 
        }
    }, [isSignedIn, billingAndShippingAreTheSame, addresses, handleSubmit]);

    return (
        <div className={`${billingAndShippingAreTheSame ? classes.miniRoot : classes.root}`}>
            <CheckoutTitle title="BILLING ADDRESS" number={2}/>
            <div className={classes.checkboxField}>
                <Checkbox 
                    onChange={handleChange} 
                    checked={billingAddress && billingAddress._id && billingAddress._id !== shippingAddress._id ? false : billingAndShippingAreTheSame}
                />
                <span>Billing and shipping address are the same</span>
            </div>
            { 
                billingAndShippingAreTheSame 
                ?   null
                :   addressContent
            }
            { billingAndShippingAreTheSame
                ?    <div className={classes.buttons}>
                        <Button onClick={() => handleSubmit(null)}>Submit</Button>
                    </div>
                :   null
            }
        </div>
    )
}

export default BillingAddress;