import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import * as yup from 'yup';
import { auth } from '../FireBase';
import "../styles/RegisterForm.css"


export const RegisterForm = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const formInitialSchema = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const formValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        password: yup.string().required('Please Enter your password').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Be Atleast 8 Characters, Contain One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
    });

    const handleFormSubmit = (values) => {
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.password).then(res => {
            setSubmitButtonDisabled(false)
            const user = res.user;
            updateProfile(user, {
                displayName: values.name,
            })
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('email',values.email);
            navigate('/home')
        }).catch(err => {
            setErrorMsg(err.message)
            setSubmitButtonDisabled(false)
        })
    }
    return (
        <Fragment>
            <div className="container">
                <Formik initialValues={formInitialSchema} validationSchema={formValidationSchema}
                    onSubmit={(values => handleFormSubmit(values))}>
                    {({ values }) =>
                        <Form className='register-form'>
                            <div className='comp'>
                                <div className="input">Name</div>
                                <Field type="text" name="name" placeholder="Enter your Name" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="name" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Email</div>
                                <Field type="text" name="email" placeholder="Enter your Email" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Password</div>
                                <Field type="password" name="password" placeholder="Enter your Password" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="password" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Confirm Password</div>
                                <Field type="password" name="confirmPassword" placeholder="Confirm your Password" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="confirmPassword" />
                                </p>
                            </div>
                            <div className='error-message'>{errorMsg}</div>
                            <div className="end">
                                <button className="register-button" type="submit" disabled={submitButtonDisabled}>
                                    Sign Up
                                </button>
                            </div>
                            <div className='register-footer'>
                                <div>Already a User?<NavLink className='link-to-login' to='/login'>Login Now!</NavLink></div>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </Fragment >
    )
}