import React from 'react';
import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";
import StoreContext from "../../../StoreContext";

const Sidebar = (props) => {

    // let state = props.store.getState().friendsSidebar;
    //
    // let friendElements = state.friendsData.map(friend => <Friend image={friend.image} name={friend.name} />)

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().friendsSidebar;

                let friendElements = state.friendsData.map(friend => <Friend image={friend.image} name={friend.name} />)
            return <div className={s.sidebar}>
                <h2>Friends</h2>
                <div className={s.friends}>
                    { friendElements }
                </div>
            </div>
            }}

        </StoreContext.Consumer>
    )
}

export default Sidebar