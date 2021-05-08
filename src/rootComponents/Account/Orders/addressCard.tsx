import React from 'react';
import { IAddress } from 'src/interfaces/address';
import classes from './addressCard.scss';

type Props = {
    address: IAddress
}

const AddressCard = (props: Props) => {
    const { address } = props;
    const { 
        address: addessInfo, 
        email, 
        phone, 
        additionalInformation, 
        firstName, 
        lastName,
        state,
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
                    State :
                </span>
                <span className={classes.addressValue}>
                    {state}
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
                    Address :
                </span>
                <span className={classes.addressValue}>
                    {addessInfo}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    First Name :
                </span>
                <span className={classes.addressValue}>
                    {firstName}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Last Name :
                </span>
                <span className={classes.addressValue}>
                    {lastName}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Email :
                </span>
                <span className={classes.addressValue}>
                    {email}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Additional information :
                </span>
                <span className={classes.addressValue}>
                    {additionalInformation}
                </span>
            </div>
        </div> 
    )

}

export default AddressCard;