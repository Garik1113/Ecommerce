import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import Button from 'src/components/Button';
import { useAccount } from 'src/talons/Account/useAccount';
import classes from './account.scss';
import Tabs from './tabs';


const Account:React.FC = () => {
    const { firstName, lastName, handleSubmit } = useAccount();

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.tabs}>
                    <Tabs/>
                </div>
                <div className={classes.account}>
                    <Formik
                        initialValues={{ firstName, lastName }}
                        onSubmit={handleSubmit}
                        enableReinitialize={true}
                    >
                        {({values}) => (
                            <Form className={classes.form}>
                                <div className={classes.field}>
                                    <Field type="text" name="firstName" value={values.firstName} className={classes.input}/>
                                    {values.firstName 
                                    ?   null
                                    :   <label htmlFor="firstName" className={classes.label}>First Name</label>
                                    }
                                    
                                    <ErrorMessage name="firstName" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="lastName" className={classes.input}/>
                                    {values.lastName 
                                    ?   null
                                    :   <label htmlFor="lastName" className={classes.label}>Last Name</label>
                                    }
                                    <ErrorMessage name="lastName" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.btnWrapper}>
                                    <Button priority="high" label="Change">Change</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Account;