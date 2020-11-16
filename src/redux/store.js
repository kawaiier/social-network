import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
        profilePage : {
            postsData: [
                {id: 1, text: "Hi!", likesCount: 1},
                {id: 2, text: "Hello!", likesCount: 3},
                {id: 3, text: "My name is John Cena!", likesCount: 38}
            ],
            newPostText : 'THis is SPARTA!!!'
        },
        dialogsPage : {
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
        },
        friendsSidebar : {
            friendsData: [
                {id: 1, name: "Oleg", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1290_.jpg"},
                {id: 2, name: "Kolya", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1294_.jpg"},
                {id: 3, name: "Olya", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1293_.jpg"},
                {id: 4, name: "Popa", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1292_.jpg"},
                {id: 5, name: "Roman", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1291_.jpg"}
            ]
        }
    },
    _callSubscriber() {
        console.log("STATES");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsSidebar = sidebarReducer(this._state.friendsSidebar, action);
        this._callSubscriber(this._state);
    }
}






window.state = store;
export default store;
