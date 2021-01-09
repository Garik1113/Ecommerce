import React from 'react';
import classes from '../Signup/signup.scss';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import Button from '../Button';
import { Link } from 'react-router-dom';


interface Values {
    email: string,
    password: string
}

 
const Signin:React.FC = () => (
    <div>
        <h1 className={classes.title}>Sign In</h1>
        <Formik
            initialValues={
                { 
                    email: '', 
                    password: ''
                }
            }
            validate={(values:Values) => {
                const errors = {};
                if(values["email"] && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values["email"])){
                    errors["email"] = "Invalid email address";
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


                <label htmlFor="email" className={classes.label}>Email <span>*</span> </label>
                <Field type="email" name="email" className={classes.input}/>
                <ErrorMessage name="email" component="div" className={classes.error}/>

                <label htmlFor="password" className={classes.label}>Password <span>*</span></label>
                <Field type="password" name="password" className={classes.input}/>
                <ErrorMessage name="password" component="div" className={classes.error}/>

                <div className={classes.btnWrapper}>
                    <Button label="Sign In" priority="high" onClick={() =>{}} disabled={isSubmitting} className={classes.button}/> 
                </div>

                <div className={classes.haveAccount}>
                    <span>Don&lsquo;t have an account ?</span>
                    <Link to="/signup" className={classes.loginLink}>Sign up now</Link>
                </div>
                
            </Form>
            )}
        </Formik>
    </div>
);
 
 export default Signin;