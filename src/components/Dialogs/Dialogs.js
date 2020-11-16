import React from 'react';
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesElements = state.messageData.map(message => <Message text={message.text}/>);
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <React.Fragment>
            <h2>Dialogs</h2>
            <div className={s.dialogsPage}>
                <div className={s.dialogsList}>
                    { dialogsElements }
                </div>
                <div className={s.messagesList}>
                    { messagesElements }
                    <div className={s.messageInput}>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"/>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>


            </div>
        </React.Fragment>

    )
};

export default Dialogs;