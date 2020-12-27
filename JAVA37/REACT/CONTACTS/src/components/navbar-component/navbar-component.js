import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navbar-component.module.css';

export default () => {
    return(
    <div className={classes.nav}>
        <h1>PHONEBOOK</h1>
        <NavLink activeStyle={{color:'blue'}} to='/'>HOME</NavLink>
        <NavLink activeStyle={{color:'blue'}} to='/about'>ABOUT</NavLink>
        <NavLink activeStyle={{color:'blue'}} to='/login'>LOGIN</NavLink>
    </div>);
}