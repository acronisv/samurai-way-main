import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.navWrapper}>
            <nav className={s.nav}>
                <div className={s.navItem}>
                    <NavLink to="/Profile"
                             className={(navData) => navData ? s.navItemLinkActive : s.navItemLink}>Profile</NavLink>
                </div>
                <div className={s.navItem}>
                    <NavLink to="/Dialogs"
                             className={(navData) => navData ? s.navItemLinkActive : s.navItemLink}>Messages</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/News"
                             className={(navData) => navData ? s.navItemLinkActive : s.navItemLink}>News</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/Music"
                             className={(navData) => navData ? s.navItemLinkActive : s.navItemLink}>Music</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/Settings"
                             className={(navData) => navData ? s.navItemLinkActive : s.navItemLink}>Settings</NavLink>
                </div>
            </nav>
            <div className={s.friendList}>Friends</div>
        </div>

    )
}