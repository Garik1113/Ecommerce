import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useMemo } from 'react'
import Button from 'src/components/Button';
import { useAccount } from 'src/talons/Account/useAccount';
import classes from './account.scss';
import Tabs from './tabs';
import * as yup from 'yup'


const isRequired = (value:any) => {
    if (!value) {
        return "required"
    } else {
        return false
    }
} 

const Account:React.FC = () => {
    const { 
        firstName, 
        lastName,
        email, 
        handleSubmit,
        message,
        isChangingPassword,
        setIsChangingPassword
    } = useAccount();

    const validationSchema = useMemo(() => yup.object().shape({
        firstName: yup.string().required("Required"),
        lastName: yup.string().required("Required"),
        email: yup.string().required("Required"),
        currentPassword: isChangingPassword ? yup.string().required("Required") : null,
        newPassword: isChangingPassword ? yup.string().required("Required") : null,
        confirmNewPassword: isChangingPassword ? yup.string().required("Required") : null,
    }), [yup, isChangingPassword]);

    return (
            <div className={classes.body}>
                <div className={classes.tabs}>
                    <Tabs/>
                </div>
                <div className={classes.account}>
                    <Formik
                        initialValues={{ 
                            firstName, 
                            lastName, 
                            email,
                            currentPassword: "",
                            newPassword: "",
                            confirmNewPassword: "" 
                        }}
                        onSubmit={handleSubmit}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        validate={(values) => {
                            const errors = {};
                            if (values["newPassword"] !== values["confirmNewPassword"] && isChangingPassword) {
                                errors["confirmNewPassword"] = "Passwords are not the same"
                            }
                            return errors;
                        }}
                    >
                        {({values}) => (
                            <Form className={classes.form}>
                                {
                                    message.type && message.value
                                    ?   <div className={message.type == "success" ? classes.successMessage : classes.errorMessage}>
                                            {message.value}
                                        </div>
                                    :   null
                                }
                                <div className={classes.field}>
                                    <input value={values.email} onChange={() => {}} type="text" autoComplete={"none"} name="email" className={classes.input}/>
                                    {values.email 
                                    ?   null
                                    :   <label htmlFor="email" className={classes.label}>Էլ հասցե</label>
                                    }
                                    <ErrorMessage name="email" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="firstName" value={values.firstName} className={classes.input}/>
                                    {values.firstName 
                                    ?   null
                                    :   <label htmlFor="firstName" className={classes.label}>Անուն</label>
                                    }
                                    <ErrorMessage name="firstName" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <Field type="text" name="lastName" className={classes.input} validate={isRequired} />
                                    {values.lastName 
                                    ?   null
                                    :   <label htmlFor="lastName" className={classes.label}>Ազգանուն</label>
                                    }
                                    <ErrorMessage name="lastName" component="div" className={classes.error}/>
                                </div>
                                <div className={classes.field}>
                                    <span className={classes.changePassword} onClick={() => setIsChangingPassword(!isChangingPassword)}>Փոխել Գախտնաբառը</span>
                                </div>
                                {
                                    isChangingPassword
                                    ?   <div>
                                            <div className={classes.field}>
                                                <Field type="password" name="currentPassword" value={values.currentPassword} className={classes.input}/>
                                                {values.currentPassword 
                                                ?   null
                                                :   <label htmlFor="currentPassword" className={classes.label}>Գախտնաբառը</label>
                                                }
                                                
                                                <ErrorMessage name="currentPassword" component="div" className={classes.error}/>
                                            </div>
                                            <div className={classes.field}>
                                                <Field type="password" name="newPassword" value={values.newPassword} className={classes.input}/>
                                                {values.newPassword 
                                                ?   null
                                                :   <label htmlFor="newPassword" className={classes.label}>Նոր Գախտնաբառը</label>
                                                }
                                                <ErrorMessage name="newPassword" component="div" className={classes.error}/>
                                            </div>
                                            <div className={classes.field}>
                                                <Field type="password" name="confirmNewPassword" value={values.confirmNewPassword} className={classes.input}/>
                                                {values.confirmNewPassword 
                                                ?   null
                                                :   <label htmlFor="confirmNewPassword" className={classes.label}>Հաստատել Նոր Գախտնաբառը</label>
                                                }
                                                <ErrorMessage name="confirmNewPassword" component="div" className={classes.error}/>
                                            </div>
                                        </div> 
                                    :   null 
                                        
                                }
                                <div className={classes.btnWrapper}>
                                    <Button 
                                        priority="normal" 
                                        onClick={handleSubmit}
                                        label="Փոխել"
                                    >
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
    )
}

export default Account;