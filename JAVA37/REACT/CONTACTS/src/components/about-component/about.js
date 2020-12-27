import React from 'react';
import classes from './about.module.css';

export default () => {
    return(<div className={classes.main}>
                <h1> Contacts Web Application</h1>
                <h2>Test App</h2>
                <h3>Use DevTools to see Network Activity</h3>
                <p className={classes.logo}>Created and Deployed by <br /> © Michael Bishop  <br/> Dec 2020</p>
        </div>);
}