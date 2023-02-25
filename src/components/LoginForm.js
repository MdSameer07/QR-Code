import { Fragment, useState } from "react";
import { auth } from "./FireBase";
import * as yup from "yup";
import { useNavigate } from "react-router"
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/LoginForm.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";

export const LoginForm = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const formInitialSchema = {
        email: '',
        password: '',
    }

    const formValidationSchema = yup.object().shape({
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        password: yup.string().required('Please Enter your password').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"),
    });

    const handleFormSubmit = (values) => {
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.password).then(res => {
            setSubmitButtonDisabled(false);
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('email',values.email);
            navigate("/home")
        }).catch(err => {
            setErrorMsg(err.message);
            setSubmitButtonDisabled(false);
        })
    }

    return (
        <Fragment>
            <div className="container">
                <Formik initialValues={formInitialSchema} validationSchema={formValidationSchema}
                    onSubmit={(values => handleFormSubmit(values))}>
                    {({ values }) =>
                        <Form className="login-form">
                            <div className='comp'>
                                <div className="input">Email</div>
                                <Field type="text" name="email" placeholder="Enter your Email"
                                    className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Password</div>
                                <Field type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="password" />
                                </p>
                            </div>
                            <div className='error-message'>{errorMsg}</div>
                            <div className="end">
                                <button className="login-button" type="submit" disabled={submitButtonDisabled}>
                                    Login
                                </button>
                            </div>
                            <div className='login-footer'>
                                <div>New User?<NavLink className='link-to-register' to='/register'>Register Now!</NavLink></div>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </Fragment >
    )
}