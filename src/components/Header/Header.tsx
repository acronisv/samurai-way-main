import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: ()=>void
}
export const Header = (props:HeaderPropsType) => {
    return (
        <header className={s.header}>
            header
            <div className={s.login_wrap}>
                {props.isAuth
                    ? <div>
                        {props.login} <button onClick={props.logoutTC}>Logout</button>
                        </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}