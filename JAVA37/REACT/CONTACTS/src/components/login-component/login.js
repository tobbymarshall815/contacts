import React from 'react';
import classes from '../login-component/login.module.css';
import {Context} from '../../App';
import {withRouter} from 'react-router-dom';

const BASE_URL = 'https://contacts-telran.herokuapp.com';

class Login extends React.Component{
    state = {
        login:'',
        password:''
    }

    componentDidMount(){
        if(localStorage.getItem('token')){ 
            this.props.history.push('/contacts');
        }
    }


    signIn = (email, password, setErr) => {
        const auth = {email,password};
        const request = JSON.stringify(auth);
        this.setState({...this.state, loaderShow:true});
        return fetch(`${BASE_URL}/api/login`, {
            method:'POST',
            headers:{'Content-Type':'application/json; charset=utf-8'},
            body:request
        }).then(response => {
            if(response.ok){
                console.log('SIGNIN STATUS:', response.status);
                response.json().then((response) => {
                  console.log(response.token);
                  localStorage.setItem("token", response.token);
                  this.props.history.push('./contacts');
                  return(response.token);
                })
            }else{
                console.log(response.code);
            }   
        }).catch(err => {
            setErr(err);
        });
    }

    registration = (email, password, setErr) => {
        const auth = {email,password};
        const requestBody = JSON.stringify(auth);
        return fetch(`${BASE_URL}/api/registration`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8'
            },
            body:requestBody
        }).then(response => {
            if(response.ok){
                console.log('REGISTRATION STATUS: ', response.status);
                response.json().then((response) => {
                    console.log("REG OK");
                    localStorage.setItem("token", response.token);
                    this.props.history.push('./contacts');
                    return(response.token);
                })
                
            }}).catch(err => {
                setErr(err);
            console.log("MES: ", err);
        });
    }

    render(){
        return(
            <Context.Consumer>
                {
                    obj => {
                        return(
                            <div className={classes.login}>
                                <input placeholder='Email' className={classes.first_input} value={this.state.login} onChange={(e) => {this.setState({...this.state, login:e.target.value})}}/>
                                <input placeholder='Password' value={this.state.password} onChange={(e) => {this.setState({...this.state, password:e.target.value})}}/>
                                <br />
                                <button onClick={() => {obj.updatetoken(this.signIn(this.state.login, this.state.password, obj.setError))}}> Login</button>
                                <button onClick={() => {this.registration(this.state.login, this.state.password, obj.updatetoken, obj.setError)}}> Registration</button>
                            </div>
                        );
                    }
                }
            </Context.Consumer>
        );
    }
}

export default withRouter(Login);