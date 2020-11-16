import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {id: 1, followed: true, photoUrl: 'http://avatarmaker.ru/img/11/1044/104306.png', fullName:'Liza', status:'Not married', location: {city:'Balashikha', country:'Russia'}},
            {id: 2, followed: false, photoUrl: 'http://avatarmaker.ru/img/11/1044/104313.jpg', fullName:'Ilia', status:'Looking for a pretty one', location: {city:'London', country:'UK'}},
            {id: 3, followed: false, photoUrl: 'http://avatarmaker.ru/img/11/1033/103260.jpg', fullName:'Georgi', status:'Big peanuts', location: {city:'Capetown', country:'South Africa'}},
            {id: 4, followed: true, photoUrl: 'http://avatarmaker.ru/img/11/1032/103127.jpg', fullName:'Marina', status:'Submarine captain', location: {city:'Seattle', country:'USA'}},
        ])
    }

    return <div>
        {
            props.users.map(u =>
                <div key={u.id} className={s.container}>
                    <div className={s.leftSide}>
                        <div className={s.userpic}>
                            <img src={u.photoUrl}/>
                        </div>
                        <div className={s.button}>
                            {u.followed ? <button className={s.unfollowButton} onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button className={s.followButton} onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div className={s.leftProfile}>
                            <div className={s.userName}>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.rightProfile}>
                            <div>{u.location.country},</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
        }
    </div>
}

export default Users;