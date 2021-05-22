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
                    Երկիր:
                </span>
                <span className={classes.addressValue}>
                    {country}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Մարզ :
                </span>
                <span className={classes.addressValue}>
                    {state}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Քաղաք :
                </span>
                <span className={classes.addressValue}>
                    {city}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Հասցե :
                </span>
                <span className={classes.addressValue}>
                    {addessInfo}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Անուն :
                </span>
                <span className={classes.addressValue}>
                    {firstName}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Ազգանուն :
                </span>
                <span className={classes.addressValue}>
                    {lastName}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Էլ հասցե :
                </span>
                <span className={classes.addressValue}>
                    {email}
                </span>
            </div>
            <div className={classes.addresField}>
                <span className={classes.addressText}>
                    Լրացուցիչ ինֆորմացիա :
                </span>
                <span className={classes.addressValue}>
                    {additionalInformation}
                </span>
            </div>
        </div> 
    )

}

export default AddressCard;