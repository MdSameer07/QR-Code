import { useRecoilValue } from "recoil"
import { UserDetails } from "../Recoil/UserDetails"
import '../styles/Profile.css'

export const Profile = () => {
    const user = useRecoilValue(UserDetails)
    const email = localStorage.getItem('email')
    return (
        <div className='profile-page'>\\
            <div className = 'profile-component'>
            <div className='name'>Name : {user}</div>
            <div className='email'>Email : {email}</div>
            </div>
        </div>
    )
}