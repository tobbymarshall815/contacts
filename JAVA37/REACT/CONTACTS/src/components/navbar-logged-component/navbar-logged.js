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
                        <NavLink activeStyle={{color:'blue'}} exact to='/'>HOME</NavLink>
                        <NavLink activeStyle={{color:'blue'}} to='/about'>ABOUT</NavLink>
                        <NavLink activeStyle={{color:'blue'}} to='/contacts'>CONTACTS</NavLink>
                        <NavLink activeStyle={{color:'blue'}} to='/add'>ADD</NavLink>
                        <button onClick={() => {props.history.push('/login'); localStorage.setItem('token', ''); obj.updatetoken('')}}>Sign Out</button>
                    </div>
                );}
            }
    </Context.Consumer>);
}

export default withRouter(NavBarLogged);