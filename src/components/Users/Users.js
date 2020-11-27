import { React } from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/nouserpic.jpg';

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
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </div>
                            <div className={s.button}>
                                {u.followed ? <button className={s.unfollowButton} onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button className={s.followButton} onClick={() => {props.follow(u.id)}}>Follow</button>}
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