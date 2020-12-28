import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navbar-component.module.css';

export default () => {
    return(
    <div className={classes.nav}>
        <h1>PHONEBOOK</h1>
        <NavLink activeStyle={{border:"1px solid black", backgroundColor:"black", color:"white"}} to='/home'>HOME</NavLink>
        <NavLink activeStyle={{border:"1px solid black", backgroundColor:"black", color:"white"}} to='/about'>ABOUT</NavLink>
        <NavLink activeStyle={{border:"1px solid black", backgroundColor:"black", color:"white"}} to='/login'>LOGIN</NavLink>
    </div>);
}