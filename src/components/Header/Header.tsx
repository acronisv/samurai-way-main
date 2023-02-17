import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
export const Header = (props:HeaderPropsType) => {
    return (
        <header className={s.header}>
            header
            <div className={s.login_wrap}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}