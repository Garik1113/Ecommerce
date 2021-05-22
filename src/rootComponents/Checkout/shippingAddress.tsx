import React from 'react';
import { useShippingAddress } from 'src/talons/Checkout/useShippingAddress';
import Address from '../Account/Addresses/address';
import AddressForm from 'components/Address'
import CheckoutTitle from './checkoutTitle';
import classes from './shippingAddress.scss';
import { IAddress } from 'src/interfaces/address';
import Button from 'src/components/Button';

type Props = {
    setStep: any
}
const ShippingAddress:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { 
        handleSubmit, 
        shippingAddress,
        addresses,
        isSignedIn,
        selectedAddress, 
        setSelectedAddress
    } = useShippingAddress({ setStep })

    return (
        <div className={classes.root}>
            <CheckoutTitle title="Առաքման հասցե" number={1}/>
            {
                isSignedIn && addresses.length
                ?   
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
                                onClick={() => handleSubmit(selectedAddress)} 
                                priority="normal" 
                                label="Submit" 
                                disabled={!selectedAddress}>
                            </Button>
                        </div>
                    </div>
                :   <AddressForm handleSubmit={handleSubmit} address={shippingAddress}/>
            }
        </div>
    )
}

export default ShippingAddress;