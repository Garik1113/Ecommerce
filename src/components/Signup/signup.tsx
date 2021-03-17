import React from 'react';
import classes from './signup.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { useSignUp } from 'src/talons/Signup/useSignUp';



interface Values {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword:string
}

 
const Signup:React.FC = () => {
    const { handleSignup, message } = useSignUp();
    
    return(
        <div>
            <h1 className={classes.title}>Sign Up</h1>
            {
                message 
                ?   <div className={classes.errorMessageField}>
                        <span>{message}</span>
                    </div>
                :   null
            }
            <Formik
                initialValues={
                    { 
                        firstName: '', 
                        lastName: '', 
                        email: '', 
                        password: '', 
                        confirmPassword: '' 
                    }
                }
                validate={(values:Values) => {
                    const errors = {};
                    if(values["email"] && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values["email"])){
                        errors["email"] = "Invalid email address";
                    }
                    if(values["password"] !== values["confirmPassword"]) {
                        errors["confirmPassword"] = "Passwords are not the same"
                    }
                    for (const value in values) {
                        if(!values[value]) {
                            errors[value] = 'Required';
                        }
                    }
                    return errors;
                }}
                onSubmit={handleSignup}
            >
                {({ isSubmitting }) => (
                <Form className={classes.form}>
                    <div className={classes.field}>
                        <Field type="text" name="firstName" className={classes.input} />
                        <label htmlFor="firstName" className={classes.label}>First Name</label>
                        <ErrorMessage name="firstName" component="div" className={classes.error}/> 
                    </div>
                    <div className={classes.field}>
                        <Field type="lastName" name="lastName" className={classes.input}/>
                        <label htmlFor="lastName" className={classes.label}>Last Name</label>
                        <ErrorMessage name="lastName" component="div" className={classes.error}/>
                    </div>
                    <div className={classes.field}>
                        <Field type="email" name="email" className={classes.input}/>
                        <label htmlFor="email" className={classes.label}>Email</label>
                        <ErrorMessage name="email" component="div" className={classes.error}/> 
                    </div>
                    <div className={classes.field}>
                        <Field type="password" name="password" className={classes.input}/>
                        <label htmlFor="password" className={classes.label}>Password</label>
                        <ErrorMessage name="password" component="div" className={classes.error}/>
                    </div>
                    <div className={classes.field}>
                        <Field type="password" name="confirmPassword" className={classes.input}/>
                        <label htmlFor="confirmPassword" className={classes.label}>Confirm Password</label>
                        <ErrorMessage name="confirmPassword" component="div" className={classes.error}/>
                    </div>
                    <div className={classes.btnWrapper}>
                        <Button label="Sign Up" priority="high" onClick={() =>{}} disabled={isSubmitting} className={classes.button}/> 
                    </div>
                    <div className={classes.haveAccount}>
                        <span>Have an account ?</span>
                        <Link to="/signin" className={classes.loginLink}>Sign in now</Link>
                    </div>
                    
                </Form>
                )}
            </Formik>
        </div>
    )
};
 
 export default Signup;