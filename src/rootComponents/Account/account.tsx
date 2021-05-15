import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import Button from 'src/components/Button';
import { useAccount } from 'src/talons/Account/useAccount';
import classes from './account.scss';
import Tabs from './tabs';


const Account:React.FC = () => {
    const { 
        firstName, 
        lastName,
        email, 
        handleSubmit,
        isSubmitting,
        message,
        isChangingPassword,
        setIsChangingPassword
    } = useAccount();

    return (
        <div className={classes.root}>
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
                                    <Field type="text" name="email" className={classes.input}/>
                                    {values.email 
                                    ?   null
                                    :   <label htmlFor="email" className={classes.label}>Last Name</label>
                                    }
                                    <ErrorMessage name="email" component="div" className={classes.error}/>
                                </div>
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
                                <div className={classes.field}>
                                    <span className={classes.changePassword} onClick={() => setIsChangingPassword(!isChangingPassword)}>Change Passwor</span>
                                </div>
                                {
                                    isChangingPassword
                                    ?   <div>
                                            <div className={classes.field}>
                                                <Field type="password" name="currentPassword" value={values.currentPassword} className={classes.input}/>
                                                {values.currentPassword 
                                                ?   null
                                                :   <label htmlFor="currentPassword" className={classes.label}>Current Password</label>
                                                }
                                                
                                                <ErrorMessage name="currentPassword" component="div" className={classes.error}/>
                                            </div>
                                            <div className={classes.field}>
                                                <Field type="password" name="newPassword" value={values.newPassword} className={classes.input}/>
                                                {values.newPassword 
                                                ?   null
                                                :   <label htmlFor="newPassword" className={classes.label}>New Password</label>
                                                }
                                                
                                                <ErrorMessage name="newPassword" component="div" className={classes.error}/>
                                            </div>
                                            <div className={classes.field}>
                                                <Field type="password" name="confirmNewPassword" value={values.confirmNewPassword} className={classes.input}/>
                                                {values.confirmNewPassword 
                                                ?   null
                                                :   <label htmlFor="confirmNewPassword" className={classes.label}>Confirm New Password</label>
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
                                        label="Change"
                                    >
                                    </Button>
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