import React from 'react';
import { IAddress } from 'src/interfaces/address';
import classes from './address.scss';

type Props = {
    address: IAddress
}

const Address:React.FC<Props> = (props: Props) => {
    const { address } = props;

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
                        <span className={classes.columnValue}>{address.firstAddress}</span>
                    </div>
                </div>
                <div className={classes.actions}>
                    <div>
                        <span>Edit</span>
                    </div>
                    <div>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address