import React, { useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './address.scss';
import { Function } from 'lodash';
import { TAddress } from 'src/store/types/cart';
import { Button } from 'semantic-ui-react';
import * as yup from 'yup'


interface Address {
    firstName: string,
    lastName: string,
    firstAddress: string,
    secondAddress? : string,
    city: string,
    country: string,
    state?: string,
    zip: string,
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
    handleSubmit?: any
}

const Address:React.FC<Props> = (props: Props) => {
    const { handleSubmit } = props;
    const address: TAddress = {
        firstName: "",
        lastName: "",
        firstAddress: "",
        secondAddress: "",
        city: "",
        country: "",
        state: "",
        zip: 0,
        phone: "",
        company: ""
    }
    let validationSchema = useMemo(() => yup.object().shape({
            firstName: yup.string().required("Required"),
            lastName: yup.string().required("Required"),
            firstAddress: yup.string().required("Required"),
            city: yup.string().required("Required"),
            zip: yup.number().required("Required"),
            phone: yup.string().required("Required"),
    }), []);
    
    
    return (
        <div className={classes.root}>
            <Formik
                initialValues={address}
                onSubmit={handleSubmit}
                // validationSchema={validationSchema}
            >
                {
                    ({handleSubmit}) => (
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
                                    <Field type="text" name="city" className={classes.input}/>
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
                                    {/* <Field type="text" name="country" className={classes.input}/> */}
                                    <select name="country" id=""
                                     className={classes.input}>
                                        {/* {
                                            data && data.countries && data.countries.map((e,i) => (
                                                <option value={e.name} key={i} className={classes.option}>{e.name}</option>
                                            ))
                                        } */}
                                    </select>
                                    <label htmlFor="country" className={classes.label}>Country</label>
                                    <ErrorMessage name="country" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="state" className={classes.input}/>
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