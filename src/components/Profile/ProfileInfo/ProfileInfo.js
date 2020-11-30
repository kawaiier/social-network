import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } 

    return (
        <React.Fragment>
            <div className={s.cover}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdaks2k3a4ib2z.cloudfront.net%2F57dc5ba03bd579bc1ed6eab6%2F5a60b4b3c5d423000122d127_vegan-plantbased-carrefour.jpg&f=1&nofb=1"/>
            </div>
            <div className={s.profile}>
                <div className={s.profileHead}>
                    <div className={s.ava}>
                        <img src={props.profile.photos.large} />
                    </div>
                    <div className={s.profileInfo}>
                        <h3>{props.profile.fullName}</h3>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
};

export default  ProfileInfo;