import React from 'react';
import classes from './Profile.module.css';
import HeaderInfo from './../headerInfo/HeaderInfo';
import Post from './../Post/Post';

const Profile = ()=>{
    return (
        <div className={classes.Content}>
            <HeaderInfo />
            <div className={classes.Posts}>
                <p>POSTS</p>
                <div className={classes.ItemN}>
                    <p>NEW POST</p>
                    <div className={classes.postN}>
                        <div className={classes.postT}>
                            <p>POST</p>
                        </div>
                        <div className={classes.postC}>
                            <p>hi im Lesha, web-developer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );

}

export default Profile;