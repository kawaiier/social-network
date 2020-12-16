import { React } from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/nouserpic.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i=1; i<= pagesCount; i++){
        pages.push(i);
    }
    
    return (
         <div>
            <div>
                {pages.map(p => {
                        return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.selectedPage}>{p}</span>
                    }
                )}
                <span >2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {
                props.users.map( u =>
                    <div key={u.id} className={s.container}>
                        <div className={s.leftSide}>
                            <div className={s.userpic}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                            </div>
                            <div className={s.button}>
                                {u.followed
                                 ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.unfollowButton} onClick={() => {
                                     props.toggleFollowingProgress(true, u.id);
                                     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                         withCredentials: true, 
                                         headers: {
                                             'API-KEY':'dfab80e5-b5bc-4328-b3e0-c5aa77ee4981'
                                         } 
                                         }).then(response => {if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                         })
                                     }}>Unfollow</button> : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followButton} onClick={() => { 
                                        props.toggleFollowingProgress(true, u.id);
                                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                             withCredentials: true,
                                             headers: {
                                             'API-KEY':'dfab80e5-b5bc-4328-b3e0-c5aa77ee4981'
                                            } 
                                             }).then(response => {if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                            }
                                         props.toggleFollowingProgress(false, u.id);
                                         })
                                         }}>Follow</button>}
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
    )
}

export default Users