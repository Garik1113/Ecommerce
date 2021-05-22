import React from 'react';
import Button from 'src/components/Button';
import { ShippingMethod } from 'src/interfaces/cart';
import { useShippingMethod } from 'src/talons/Checkout/useShippingMethod';
import CheckoutTitle from './checkoutTitle';
import classes from './shippingMethod.scss';

type Props = {
    setStep: any
}

const ShippingMethod:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { 
        handleSubmit, 
        setMethod,
        method,
        shippingMethods
    } = useShippingMethod({setStep})

    return (
        <div className={classes.root}>
            <CheckoutTitle title="Առաքման տեսակ" number={3}/>
            <div className={classes.body}>
                {
                    shippingMethods && shippingMethods.length
                    ?   shippingMethods.map((e: ShippingMethod, i:number) => (
                            e.enabled
                            ?   <div className={classes.method} key={i} onClick={() => setMethod(e)}>
                                    <input 
                                        type="radio" 
                                        name="method" 
                                        value={e.methodCode} 
                                        className={classes.radio} 
                                        checked={method?.methodCode==e.methodCode}
                                    />
                                    <span>{e.methodName}</span> 
                                    <span>{e.price}</span>  
                                </div>
                            :   null
                        ))
                    :   null
                }
                <div className={classes.button}>
                    <Button 
                        priority="normal" 
                        onClick={handleSubmit}
                        label="Հաստատել"
                    ></Button>
                </div>
            </div>
        </div>
    )
}

export default ShippingMethod;