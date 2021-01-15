import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postsData: [
        {id: 1, text: "Hi!", likesCount: 1},
        {id: 2, text: "Hello!", likesCount: 3},
        {id: 3, text: "My name is John Cena!", likesCount: 38}
    ],
    newPostText : 'Post me!',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newID = state.postsData.length + 1;
            let newPost = {
                id: newID,
                text: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, 
                profile: action.profile
            }
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

export const  setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const  getUserProfile = (userID) => (dispatch) => {
    usersAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data));
        })
}


export default profileReducer;