const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, text: "Hi!", likesCount: 1},
        {id: 2, text: "Hello!", likesCount: 3},
        {id: 3, text: "My name is John Cena!", likesCount: 38}
    ],
    newPostText : 'Post me!'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newID = state.postsData.length + 1;
            let newPost = {
                id: newID,
                text: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;