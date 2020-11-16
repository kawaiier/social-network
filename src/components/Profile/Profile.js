import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <h2>My Profile</h2>
            <ProfileInfo />
            <MyPostsContainer />
            {/*<MyPostsContainer store={props.store}/>*/}

        </div>
    )
};

export default Profile;