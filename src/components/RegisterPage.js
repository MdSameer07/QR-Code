import '../styles/RegisterPage.css'
import { RegisterForm } from './RegisterForm'

export const RegisterPage = () =>{
    return (
        <div className = 'register-page'>
            <div className = 'register-form-outer'>
                <div className = 'register-heading'>Register Now</div>
                <RegisterForm/>
            </div>
        </div>
    )
}