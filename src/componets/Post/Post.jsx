import React from 'react';
import classes from './../Profile/Profile.module.css';

const Post = ()=>{
    return(
        <div className={classes.postN}>
            <div className={classes.postT}>
                <p>POST</p>
            </div>
            <div className={classes.postC}>
                <p>Hello im lesha</p>
            </div>
        </div>
    );
}

export default Post;