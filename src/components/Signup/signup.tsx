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
        <div className={classes.root}>
            <h1 className={classes.title}>Գրանցվել</h1>
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
                        confirmPassword: '',
                        productSubscriptions: false
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
                        if(!values[value] && value !== "productSubscriptions") {
                            errors[value] = 'Required';
                        }
                    }
                    console.log(errors)
                    return errors;
                }}
                onSubmit={handleSignup}
            >
                {({ isSubmitting, handleChange, values }) => (
                <Form className={classes.form}>
                    <div className={classes.field}>
                        <Field type="text" name="firstName" className={classes.input} />
                        <label htmlFor="firstName" className={classes.label}>Անուն</label>
                        <ErrorMessage name="firstName" component="div" className={classes.error}/> 
                    </div>
                    <div className={classes.field}>
                        <Field type="lastName" name="lastName" className={classes.input}/>
                        <label htmlFor="lastName" className={classes.label}>Ազգանուն</label>
                        <ErrorMessage name="lastName" component="div" className={classes.error}/>
                    </div>
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
                    <div className={classes.field}>
                        <Field type="password" name="confirmPassword" className={classes.input}/>
                        <label htmlFor="confirmPassword" className={classes.label}>Հաստատել Նոր Գախտնաբառը</label>
                        <ErrorMessage name="confirmPassword" component="div" className={classes.error}/>
                    </div>
                    <div className={classes.checkboxField}>
                        <div className={classes.flex}>
                            <input 
                                type="checkbox" 
                                id="productSubscriptions"
                                onChange={handleChange} 
                                checked={values.productSubscriptions}
                                name="productSubscriptions"
                            />
                            <label htmlFor="productSubscriptions" className={classes.checkboxLabel}>
                                իմանալ ապրանքների հասանելիության մասին
                            </label>
                        </div>
                        <span>Պետք է հաստատել Էլ հասցեն</span>
                    </div>
                    <div className={classes.btnWrapper}>
                        <Button label="Գրանցվել" priority="high" onClick={() =>{}} disabled={isSubmitting} className={classes.button}/> 
                    </div>
                    <div className={classes.haveAccount}>
                        <span>Have an account ?</span>
                        <Link to="/signin" className={classes.loginLink}>Գրանցվել</Link>
                    </div>
                    
                </Form>
                )}
            </Formik>
        </div>
    )
};
 
 export default Signup;