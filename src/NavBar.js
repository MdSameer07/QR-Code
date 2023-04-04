import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { auth } from "../FireBase"
import { UserDetails } from "./Recoil/UserDetails"
import '../styles/NavBar.css'

export const NavBar = () =>{
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const [user,setUser] = useRecoilState(UserDetails)
    const navigate = useNavigate();

    useEffect(()=>{

        auth.onAuthStateChanged((user)=>{
            setUser(user.displayName)
        })
    })

    const logout = () =>{
        auth.signOut().then(() => {
            setUser(null)
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('email')
            navigate('/')
        })
    }

    return (
        <nav className = 'nav-total'>
            <div className = 'nav-logo'>
                {isLoggedIn && <NavLink className = 'logo' to = '/home'>
                    <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt = 'Scope'></img>
                </NavLink>}
                {!isLoggedIn && <NavLink className = 'logo' to = '/'>
                    <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt = 'Scope'></img>
                </NavLink>}
            </div>
            {isLoggedIn && <div className = 'nav-end'>
                <NavLink className = 'profile' to = '/profile'>PROFILE</NavLink>
                <button className = 'logout-button' onClick={() => { logout() }}>LOG OUT</button>
            </div>}
            {!isLoggedIn && <div className = 'nav-end'>
                <NavLink className = 'login' to = '/login'>LOGIN</NavLink>
                <NavLink className = 'register' to = '/register'>REGISTER</NavLink>
            </div>}
        </nav>
    )
}