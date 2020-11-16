const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Serega"},
        {id: 2, name: "Zhora"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Pavel"},
        {id: 5, name: "Raven"},
        {id: 6, name: "Valera"}
    ],
    messageData: [
        {id: 1, text: "Hi, it's me!"},
        {id: 2, text: "Give life back to music"},
        {id: 3, text: "WOW"},
        {id: 4, text: "If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).\n" +
                "                        The presence of the inset keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content."},
    ],
    newMessageBody : ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: 6, text: body}],
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default dialogsReducer;