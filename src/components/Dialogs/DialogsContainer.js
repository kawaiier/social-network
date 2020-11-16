import React from 'react';
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    // let state = props.store.getState().dialogsPage;
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator());
    // }
    //
    // let onNewMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body));
    // }

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>

            }
        }
        </StoreContext.Consumer>
    // <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
};

export default DialogsContainer;