import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';

import Home from './components/home-component/home';
import About from './components/about-component/about';
import Login from './components/login-component/login';
import Contacts from './components/contact-page-component/contact-page';
import Add from './components/add-component/add';

import NavBarComponent from './components/navbar-component/navbar-component';
import NavBarLogged from './components/navbar-logged-component/navbar-logged';

import classes from './App.css';

export const Context = React.createContext();

export default class App extends React.Component{

  state = {
    loaderShow: false,
    token:'',
    error: null,
    textError: null
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.setState({...this.state, token:localStorage.getItem('token')});
    }
  }

  updateToken = (token) => {
    this.setState({loaderShow:false, token:token, error: null, textError: null});
  }

  setError = (error, textError) => {
    window.alert(textError);
    console.log(textError);
    this.setState({loaderShow: false, token:"", error: error, textError: textError});
  }

  setLoading = () => {
    this.setState({...this.state, loaderShow: true});
  }
 
  render(){
    return(
      <>
          <Context.Provider value={{token:this.state.token, updatecontacts:this.updateContacts ,contacts:this.state.contacts, updatetoken:this.updateToken , deleteAllcontacts:this.deleteAllContacts, updateContact:this.updateContact, getAllContacts:this.getAllContacts, deleteById:this.deleteById, addContact:this.addContact, checkStorage:this.checkStorage, setError: this.setError, error: this.state.error, setLoading: this.setLoading, isLoading: this.state.loaderShow, textError:this.state.textError}}>
            {
              this.state.token ? <NavBarLogged /> : <NavBarComponent/>} 
              <div className={classes.routes}>   
                <Switch>
                  <Route path='/home'  component={Home} />
                  <Redirect from= "/" exact to="/home" />
                  <Route path='/about'  component={About} />
                  <Route path='/login'  component={Login} />
                  <Route path='/contacts'  component={Contacts} />
                  <Route path='/add'  component={Add} />
                </Switch>
              </div>  
          </Context.Provider>
      </>
    );
  }
}