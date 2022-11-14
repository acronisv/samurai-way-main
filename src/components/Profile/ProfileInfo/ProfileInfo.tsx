import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profileWrap}>
            <div><img className={s.profileImage} src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png" alt="avatar"/></div>
            <div>avatar desc</div>
        </div>
    );
};
