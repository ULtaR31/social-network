import React from 'react';
import FuncUp from './../FunkUp/FunkUp.jsx';
import classes from './NavBar.module.css';

const NavBar = ()=>{
    return (
        <nav className={classes.Nav}>
            <div className={classes.Item}>
                <a href="#">Profile</a>
            </div>
            <div className={classes.Item}>
                <a href="#">Messages</a>
            </div>
            <div className={classes.Item}>
                <a href="#">News</a>
            </div>
            <div className={classes.Item}>
                <a href="#">Music</a>
            </div>
            <div className={classes.Item}>
                <a href="#">Setting</a>
            </div>
            <FuncUp />
        </nav>
    );

}

export default NavBar;