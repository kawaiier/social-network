import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.post}>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatsism.com%2Fuploads%2Fposts%2F2018-07%2F1530544023_n6fgwzftnvg.jpg&f=1&nofb=1" />
        <p>{props.message}</p>
        <div className={s.like}>
          <span>UP!</span>
        </div>
        <div className={s.likeCount}>
            <span>{props.likes} UPs</span>
        </div>
      </div>
    );
};

export default Post;