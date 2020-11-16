import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb1%2F5f%2F45%2Fb15f45e7c79ffde91db8f8ecb3d4cfdb.jpg&f=1&nofb=1"/>
            <div>
                {props.text}
            </div>
        </div>
    )
};

export default Message;