import React from 'react';
import classes from './signup.scss';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import Button from '../Button';
import { Link } from 'react-router-dom';



interface Values {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword:string
}

 
const Signup:React.FC = () => (
    <div>
        <h1 className={classes.title}>Sign Up</h1>
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
            onSubmit={(values, { setSubmitting }:FormikHelpers<Values>) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
            <Form className={classes.form}>
                <label htmlFor="firstName" className={classes.label}>First Name <span>*</span></label>
                <Field type="firstName" name="firstName" className={classes.input}/>
                <ErrorMessage name="firstName" component="div"className={classes.error} />

                <label htmlFor="lastName" className={classes.label}>Last Name <span>*</span></label>
                <Field type="lastName" name="lastName" className={classes.input}/>
                <ErrorMessage name="lastName" component="div" className={classes.error}/>

                <label htmlFor="email" className={classes.label}>Email <span>*</span> </label>
                <Field type="email" name="email" className={classes.input}/>
                <ErrorMessage name="email" component="div" className={classes.error}/>

                <label htmlFor="password" className={classes.label}>Password <span>*</span></label>
                <Field type="password" name="password" className={classes.input}/>
                <ErrorMessage name="password" component="div" className={classes.error}/>

                <label htmlFor="confirmPassword" className={classes.label}>Confirm Password <span>*</span></label>
                <Field type="password" name="confirmPassword" className={classes.input}/>
                <ErrorMessage name="confirmPassword" component="div" className={classes.error}/>

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
);
 
 export default Signup;