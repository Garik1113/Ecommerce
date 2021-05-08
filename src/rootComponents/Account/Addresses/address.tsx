import React from 'react';
import { IAddress } from 'src/interfaces/address';
import classes from './address.scss';

type Props = {
    address: IAddress,
    handleEditAddress: any,
    handleDeleteAddress: any,
    inCheckout?: boolean
}

const Address:React.FC<Props> = (props: Props) => {
    const { 
        address, 
        handleEditAddress, 
        handleDeleteAddress,
        inCheckout
    } = props;
    
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>Country</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.country}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>State</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.state}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>City</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.city}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>Address</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.address}</span>
                    </div>
                </div>
                {
                    !inCheckout
                    ?   <div className={classes.actions}>
                            <div>
                                <span className={classes.buttons} onClick={() => handleEditAddress(address._id)}>Edit</span>
                            </div>
                            <div>
                                <span className={classes.buttons} onClick={() => handleDeleteAddress(address._id)}>Delete</span>
                            </div>
                        </div>
                    :   null
                }
                
            </div>
        </div>
    )
}

export default Address