import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/nouserpic.jpg'

class Users extends React.Component {
    
    constructor(props) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
                }
            );
    }

    
    render() {
        return <div>
        {
            this.props.users.map( u =>
                <div key={u.id} className={s.container}>
                    <div className={s.leftSide}>
                        <div className={s.userpic}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div className={s.button}>
                            {u.followed ? <button className={s.unfollowButton} onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> : <button className={s.followButton} onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div className={s.leftProfile}>
                            <div className={s.userName}>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.rightProfile}>
                            <div>{"u.location.country"},</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
        }
    </div>
    }
}

export default Users;