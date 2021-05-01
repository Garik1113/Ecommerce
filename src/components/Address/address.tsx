import React, { useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './address.scss';
import {  } from 'src/store/types/cart';
import { Button, Dropdown } from 'semantic-ui-react';
import * as yup from 'yup'
import { IAddress } from 'src/interfaces/address';
import { useAddress } from 'src/talons/Address/useAddress';


interface Address {
    firstName: string,
    lastName: string,
    firstAddress: string,
    secondAddress? : string,
    city: string,
    country: string,
    state?: string,
    zip: number,
    phone: string,
    company?:string
}

interface Country {
    __typename: string,
    name: string
}

interface Countries {
    countries: Country[]
}

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
        firstAddress: "",
        secondAddress: "",
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
            firstAddress: yup.string().required("Required"),
            city: yup.string().required("Required"),
            zip: yup.number().required("Required"),
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
                                    <Field type="text" name="firstName" className={classes.input} />
                                    <label htmlFor="firstName" className={classes.label}>First Name</label>
                                    <ErrorMessage name="firstName" component="div" className={classes.error}/> 
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="lastName" className={classes.input}/>
                                    <label htmlFor="lastName" className={classes.label}>Last Name</label>
                                    <ErrorMessage name="lastName" component="div" className={classes.error}/>  
                                </div>                            
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <Field type="text" name="firstAddress" className={classes.input}/>
                                    <label htmlFor="firstAddress" className={classes.label}>Address Line</label>
                                    <ErrorMessage name="firstAddress" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="secondAddress" className={classes.input}/>
                                    <label htmlFor="secondAddress" className={classes.label}>Address Line 2</label>
                                </div>
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    {/* <Field type="text" name="city" className={classes.input}/> */}
                                    {/* <Dropdown
                                        options={cityOptions}
                                        value={values.city}
                                        onChange={(e, data) => setFieldValue("city", data.value)}
                                    /> */}
                                    <Dropdown
                                        onChange={(e, data) => setFieldValue('city', data.value)}
                                        value={values.city}
                                        name="city"
                                        selection
                                        fluid
                                        id="city"
                                        options={cityOptions}
                                    />
                                    <label htmlFor="city" className={classes.label}>City</label>
                                    <ErrorMessage name="city" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="zip" className={classes.input}/>
                                    <label htmlFor="zip" className={classes.label}>ZIP</label>
                                    <ErrorMessage name="zip" component="div" className={classes.error}/>
                                </div>
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <Dropdown
                                        onChange={(e, data) => setFieldValue('country', data.value)}
                                        value={values.country}
                                        name="country"
                                        selection
                                        fluid
                                        id="country"
                                        options={countryOptions}
                                    />
                                    <label htmlFor="country" className={classes.label}>Country</label>
                                    <ErrorMessage name="country" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Dropdown
                                        onChange={(e, data) => setFieldValue('state', data.value)}
                                        value={values.state}
                                        name="state"
                                        selection
                                        fluid
                                        id="state"
                                        options={stateOptions}
                                    />
                                    <label htmlFor="state" className={classes.label}>State</label>
                                    <ErrorMessage name="state" component="div" className={classes.error}/>
                                </div>
                            </div>
                            <div className={classes.fieldWrapper}>
                                <div className={classes.field}>
                                    <Field type="text" name="phone" className={classes.input}/>
                                    <label htmlFor="phone" className={classes.label}>Phone</label>
                                    <ErrorMessage name="phone" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="company" className={classes.input}/>
                                    <label htmlFor="company" className={classes.label}>Company</label>
                                </div>
                            </div>
                            <div className={classes.buttonField}>
                                <Button type="submit" onClick={handleSubmit}>Submit</Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Address;