import '../styles/LoginPage.css'
import { LoginForm } from './LoginForm'

export const LoginPage = () =>{
    return (
        <div className = 'login-page'>
            <div className = 'login-form-outer'>
                <div className = 'login-heading'>Welcome</div>
                <LoginForm/>
            </div>
        </div>
    )
}