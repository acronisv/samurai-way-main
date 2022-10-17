import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                <a href="/Profile">Profile</a>
            </div>
            <div className={s.navItem}>
                <a href="/Dialogs">Messages</a>
            </div>
            <div className="nav-item">
                <a href="/News">News</a>
            </div>
            <div className="nav-item">
                <a href="/Music">Music</a>
            </div>
            <div className="nav-item">
                <a href="/Settings">Settings</a>
            </div>
        </nav>
    )
}