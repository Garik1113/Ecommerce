import React from 'react';
import { Icon } from 'semantic-ui-react';
import Tabs from '../tabs';
import Address from './address';
import classes from './addresses.scss';

const Addresses:React.FC = () => {

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.tabs}>
                    <Tabs/>
                </div>
                <div className={classes.addresses}>
                    <div className={classes.list}>
                        <Address address={{
                            firstAddress: "firstAddress",
                            firstName: "",
                            lastName: "",
                            country: "country",
                            city: "city",
                            phone: "",
                            zip: "",
                            email: "",
                            state: "state",
                            street: "",
                            secondAddress: "",
                            company: "",
                            isBillingAddress: false,
                            isShippingAddress: false
                        }}/>
                        <div className={classes.addAddressField}>
                            <div className={classes.plusIconField}>
                                <Icon name="add" className={classes.plusIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses