import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import classes from '../navbar-logged-component/navbar-logged.module.css';
import { Context } from '../../App';

const NavBarLogged = (props) => {
    console.log(props);
    return(
        <Context.Consumer>
            {
            (obj) => {
                return(
                    <div className={classes.nav}>
                        <h1>PHONEBOOK</h1>
                        <NavLink activeStyle={{border:"1px solid black", backgroundColor:"black", color:"white"}} exact to='/home'>HOME</NavLink>
                        <NavLink activeStyle={{border:"1px solid black", backgroundColor:"black", color:"white"}} to='/about'>ABOUT</NavLink>
                        <NavLink activeStyle={{border:"1px solid black", backgroundColor:"black", color:"white"}} to='/contacts'>CONTACTS</NavLink>
                        <NavLink activeStyle={{border:"1px solid black", backgroundColor:"black", color:"white"}} to='/add'>ADD</NavLink>
                        <button onClick={() => {props.history.push('/login'); localStorage.setItem('token', ''); obj.updatetoken('')}}>Sign Out</button>
                    </div>
                );}
            }
    </Context.Consumer>);
}

export default withRouter(NavBarLogged);