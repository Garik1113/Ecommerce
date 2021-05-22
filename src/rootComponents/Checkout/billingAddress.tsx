import React, { useMemo } from 'react';
import Address from '../Account/Addresses/address';
import AddressForm from 'components/Address';
import CheckoutTitle from './checkoutTitle';
import classes from './billingAddress.scss';
import { useBillingAddress } from 'src/talons/Checkout/useBillingAddress';
import { IAddress } from 'src/interfaces/address';
import Button from 'src/components/Button';

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
                        <Button
                            label="submit"
                            onClick={() => handleSubmit(null)}
                            priority="normal"
                        />
                    </div>
                </div>
            )
        } else {
            return <AddressForm handleSubmit={handleSubmit} address={billingAddress}/> 
        }
    }, [isSignedIn, billingAndShippingAreTheSame, addresses, handleSubmit]);

    return (
        <div className={`${billingAndShippingAreTheSame ? classes.miniRoot : classes.root}`}>
            <CheckoutTitle title="Վճարման հասցե" number={2}/>
            <div className={classes.checkboxField}>
                <input 
                    type="checkbox"
                    checked={billingAndShippingAreTheSame}
                    onChange={(e:any, data:any)=> handleChange(!billingAndShippingAreTheSame)}
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
                        <Button 
                            label="Submit" 
                            priority="normal" 
                            onClick={() => handleSubmit(null)}
                        />
                    </div>
                :   null
            }
        </div>
    )
}

export default BillingAddress;