import React from 'react';
import classes from './../Profile/Profile.module.css';

const HeaderInfo = ()=> {
    return (
        <div className={classes.HeaderInfo}>
            <div className={classes.AboutFon}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/>
            </div>
            <div className={classes.About}>
                <div className={classes.profile_logo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7awtPguA6HfXm1j9bZXN8Nft2e4RK7jsprg&usqp=CAU" alt=""/>
                </div>
                <div className={classes.Disc}>
                    <div className={classes.Name}>Lesha</div>
                    <div className={classes.More}>Hi im lesha and i a web-developer</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderInfo;
