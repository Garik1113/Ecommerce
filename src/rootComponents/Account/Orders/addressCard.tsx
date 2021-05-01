import React from 'react';
import { IAddress } from 'src/interfaces/address';
import classes from './addressCard.scss';

type Props = {
    address: IAddress
}

const AddressCard = (props: Props) => {
    const { address } = props;
    const { 
        firstAddress, 
        email, 
        phone, 
        secondAddress, 
        firstName, 
        lastName, 
        country, 
        city 
    } = address;

    return (
        <div className={classes.root}>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Country :
                </span>
                <span className={classes.addressValue}>
                    {country}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    City :
                </span>
                <span className={classes.addressValue}>
                    {city}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    First Address :
                </span>
                <span className={classes.addressValue}>
                    {firstAddress}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Second addres :
                </span>
                <span className={classes.addressValue}>
                    {secondAddress}
                </span>
            </div>
        </div> 
    )

}

export default AddressCard;