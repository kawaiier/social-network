import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/nouserpic.jpg'

class Users extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            }
        );
    }
    
    render() {
    
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i=1; i<= pagesCount; i++){
            pages.push(i);
        }

        return <div>
        <div>
            {pages.map(p => {
                    return <span onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                }
            )}
            <span >2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </div>
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