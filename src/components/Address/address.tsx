import React, { useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './address.scss';
import DropDown from 'components/DropDown'
import * as yup from 'yup'
import { IAddress } from 'src/interfaces/address';
import { useAddress } from 'src/talons/Address/useAddress';
import Button from '../Button';

type Props = {
    handleSubmit?: any,
    address?: IAddress
}

const Address:React.FC<Props> = (props: Props) => {
    const { handleSubmit, address } = props;
    const { countryOptions, stateOptions, cityOptions } = useAddress()
    const initialValues: IAddress = address ? address : {
        email: "",
        street: "",
        firstName: "",
        lastName: "",
        address: "",
        additionalInformation: "",
        city: "",
        country: "",
        state: "",
        zip: "",
        phone: "",
        company: "",
        isBillingAddress: true,
        isShippingAddress: true
    }
    const validationSchema = useMemo(() => yup.object().shape({
            firstName: yup.string().required("Required"),
            lastName: yup.string().required("Required"),
            address: yup.string().required("Required"),
            city: yup.string().required("Required"),
            email: yup.string().required("Required"),
            phone: yup.string().required("Required"),
    }), [yup]);
    
    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                enableReinitialize={true}
            >
                {
                    ({handleSubmit, values, setFieldValue}) => (
                        <Form className={classes.form}>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <DropDown
                                        options={countryOptions}
                                        activeValue={values.country}
                                        onChange={(v: any) => setFieldValue("country", v)}
                                    />
                                    <label htmlFor="country" className={classes.label}>Երկիր</label>
                                    <ErrorMessage name="country" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <DropDown
                                        options={stateOptions}
                                        activeValue={values.state}
                                        onChange={(v: any) => setFieldValue("state", v)}
                                    />
                                    <label htmlFor="state" className={classes.label}>Մարզ</label>
                                    <ErrorMessage name="state" component="div" className={classes.error}/>
                                </div>
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <DropDown
                                        options={cityOptions}
                                        activeValue={values.city}
                                        onChange={(v: any) => setFieldValue("city", v)}
                                    />
                                    <label htmlFor="city" className={classes.label}>Քաղաք</label>
                                    <ErrorMessage name="city" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="email" className={classes.input}/>
                                    <label htmlFor="email" className={classes.label}>Էլ հասցե</label>
                                    <ErrorMessage name="email" component="div" className={classes.error}/>
                                </div>
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <Field type="text" name="firstName" className={classes.input} />
                                    <label htmlFor="firstName" className={classes.label}>Անուն</label>
                                    <ErrorMessage name="firstName" component="div" className={classes.error}/> 
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="lastName" className={classes.input}/>
                                    <label htmlFor="lastName" className={classes.label}>Ազգանուն</label>
                                    <ErrorMessage name="lastName" component="div" className={classes.error}/>  
                                </div>                            
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <Field type="text" name="address" className={classes.input}/>
                                    <label htmlFor="address" className={classes.label}>Հասցե</label>
                                    <ErrorMessage name="address" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="additionalInformation" className={classes.input}/>
                                    <label htmlFor="additionalInformation" className={classes.label}>Լրացուցիչ ինֆորմացիա</label>
                                </div>
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <Field type="text" name="phone" className={classes.input}/>
                                    <label htmlFor="phone" className={classes.label}>Հեռախոսահամար</label>
                                    <ErrorMessage name="phone" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="company" className={classes.input}/>
                                    <label htmlFor="company" className={classes.label}>Ընկերություն</label>
                                </div>
                            </div>
                            <div className={classes.buttonField}>
                                <Button 
                                    priority="normal" 
                                    onClick={handleSubmit}
                                    label={"Հաստատել"}
                                ></Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Address;