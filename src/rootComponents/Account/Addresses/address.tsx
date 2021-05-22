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
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>Երկիր</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.country}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>Մարզ</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.state}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>Քաղաք</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.city}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.columnTitleField}>
                        <span className={classes.columnTitle}>Հասցե</span>
                    </div>
                    <div className={classes.columnValueField}>
                        <span className={classes.columnValue}>{address.address}</span>
                    </div>
                </div>
                {
                    !inCheckout
                    ?   <div className={classes.actions}>
                            <div>
                                <span className={classes.buttons} onClick={() => handleEditAddress(address._id)}>Փոփոխել</span>
                            </div>
                            <div>
                                <span className={classes.buttons} onClick={() => handleDeleteAddress(address._id)}>Ջնջել</span>
                            </div>
                        </div>
                    :   null
                }
        </div>
    )
}

export default Address