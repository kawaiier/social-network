import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

    // let state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }
    //
    // let onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostActionCreator(text))
    // }

    return (

        // <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text))
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                postsData={store.getState().profilePage.postsData}
                                newPostText={store.getState().profilePage.newPostText} />

            }

        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;