import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <React.Fragment>
            <div className={s.cover}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdaks2k3a4ib2z.cloudfront.net%2F57dc5ba03bd579bc1ed6eab6%2F5a60b4b3c5d423000122d127_vegan-plantbased-carrefour.jpg&f=1&nofb=1"/>
            </div>
            <div className={s.profile}>
                <div className={s.profileHead}>
                    <div className={s.ava}>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E0BAQGov_duxqS2eA%2Fcompany-logo_200_200%2F0%3Fe%3D2159024400%26v%3Dbeta%26t%3Dk4Td2RWxdVCywHhKjE8DUdGFmEvcj2qJJOOkkHE25Rs&f=1&nofb=1' />
                    </div>
                    <div className={s.profileInfo}>
                        <h3>Slim Shady</h3>
                        <p>14.09.2000</p>
                        <p>Vykhino</p>
                        <p>HSE</p>
                        <p>kawaiier.github.io</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
};

export default  ProfileInfo;