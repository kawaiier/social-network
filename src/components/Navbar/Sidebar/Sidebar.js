import React from 'react';
import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {

    let state = props.friendsSidebar;

    let friendElements = state.friendsData.map(friend => <Friend key={friend.id} image={friend.image} name={friend.name} />)

    return (
        <div className={s.sidebar}>
                <h2>Friends</h2>
                <div className={s.friends}>
                    { friendElements }
                </div>
            </div>
    )
}

export default Sidebar