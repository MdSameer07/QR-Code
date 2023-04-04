import { useRecoilValue } from "recoil"
import { UserDetails } from "../Recoil/UserDetails"
import '../styles/Profile.css'
import Genqr from "./Genqr"

export const Profile = () => {
    const user = useRecoilValue(UserDetails)
    const email = localStorage.getItem('email')
    return (
        <div className='profile-page'>
            <div className = 'profile-component'>
            <Genqr name={user} email={email} />
            
            </div>
        </div>
        
    )
}