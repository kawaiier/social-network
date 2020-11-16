import React from 'react';
import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.person}>
            <img src={props.image}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;