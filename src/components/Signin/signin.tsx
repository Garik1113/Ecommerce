import React from 'react';
import classes from './signin.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { useSignin } from 'src/talons/Signin/useSignin';


interface Values {
    email: string,
    password: string
}

 
const Signin:React.FC = () => {
    const { handleSignin, message } = useSignin();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Մուտք</h1>
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
                onSubmit={handleSignin}
            >
                {({ isSubmitting }) => (
                <Form className={classes.form}>
                    <div className={classes.field}>
                        <Field type="email" name="email" className={classes.input}/>
                        <label htmlFor="email" className={classes.label}>Էլ հասցե</label>
                        <ErrorMessage name="email" component="div" className={classes.error}/>
                    </div>
                    <div className={classes.field}>
                        <Field type="password" name="password" className={classes.input}/>
                        <label htmlFor="password" className={classes.label}>Գախտնաբառ</label>
                        <ErrorMessage name="password" component="div" className={classes.error}/>
                    </div>
                    <div className={classes.btnWrapper}>
                        <Button label="Մուտք" priority="high" onClick={() =>{}} disabled={isSubmitting} className={classes.button}/> 
                    </div>
                    <div className={classes.haveAccount}>
                        <span>Գրանցված չեք ?</span>
                        <Link to="/signup" className={classes.loginLink}>Գրանցվել</Link>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    )
};
 
 export default Signin;