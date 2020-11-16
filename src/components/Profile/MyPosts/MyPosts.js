import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postElements = props.postsData.map(post => <Post message={post.text} likes={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div className={s.postInput}>
                <textarea ref={newPostElement} onInput={onPostChange} value={props.newPostText}/>
                <button onClick={ onAddPost } >Post</button>
            </div>
            <hr/>
            { postElements  }
        </div>
    );
};

export default MyPosts;