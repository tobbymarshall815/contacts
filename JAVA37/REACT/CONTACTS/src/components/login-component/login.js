import React from 'react';
import classes from '../login-component/login.module.css';
import {Context} from '../../App';
import {withRouter} from 'react-router-dom';

const BASE_URL = 'https://contacts-telran.herokuapp.com';

class Login extends React.Component{
    state = {
        login:'',
        password:'',
        isHidden: true
    }

    componentDidMount(){
        if(localStorage.getItem('token')){ 
            this.props.history.push('/contacts');
        }
    }


    signIn = (email, password, setErr, setToken, setLoading) => {
        const auth = {email,password};
        const request = JSON.stringify(auth);
        setLoading();
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
                  setToken(response.token);
                })
            }else{
                console.log(response.status);
                setErr(`Login Failed with code ${response.status}`, this.defineStatusCode(response.status));
            }   
        }).catch(err => {
            setErr(err.message);
        });
    }

    registration = (email, password, setErr, setToken, setLoading) => {
        const auth = {email,password};
        const requestBody = JSON.stringify(auth);
        setLoading();
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
                    setToken(response.token);
                })   
            }else{
                console.log(response.status);
                setErr(`Registration failed with code ${response.status}`, this.defineStatusCode(response.status));
            }}).catch(err => {
                setErr(err.message);
        });
    }

    defineStatusCode = (code) => {
        switch(code){
            case 400: return `Wrong email or password format
            Email must contains one @ and minimum 2 symbols after last dot
            Password must contain at least one uppercase letter!
            Password must contain at least one lowercase letter!
            Password must contain at least one digit!
            Password must contain at least one special symbol from [‘$’,’~’,’-‘,’_’]!`;
            case 409: return `User already exist`;
            case 401: return `Wrong email or password`;
            default: return `Undefined Error ${code}`
        }
    }

    show = () => {
        this.setState({...this.state, isHidden: false});
    }

    render(){
        return(
            <Context.Consumer>
                {
                    obj => {
                        return(
                            !obj.isLoading ?
                            <div className={classes.login}>
                                { obj.error 
                                ? 
                                <div style={{color: "red", textAlign:"center", marginBottom: "10px"}}>
                                    {obj.error}
                                </div> 
                                :
                                 null}
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    let email = e.target.email.value;
                                    let password = e.target.password.value;
                                    if(e.nativeEvent.submitter.name === 'login'){
                                        this.signIn(email, password, obj.setError, obj.updatetoken, obj.setLoading);
                                    }else if(e.nativeEvent.submitter.name === 'registration'){
                                        this.registration(email, password, obj.setError, obj.updatetoken, obj.setLoading);
                                    }
                                }}>
                                    <input name="email" placeholder='Email' className={classes.first_input} value={this.state.login} onChange={(e) => {this.setState({...this.state, login:e.target.value})}}/>
                                    <input name="password" placeholder='Password' value={this.state.password} onChange={(e) => {this.setState({...this.state, password:e.target.value})}}/>
                                    <br />
                                    <button type="submit" name="login">Login</button>
                                    <button type="submit" name="registration">Registration</button>
                                    {/* <button onClick={() => {this.signIn(this.state.login, this.state.password, obj.setError, obj.updatetoken, obj.setLoading)}}> Login</button>
                                    <button onClick={() => {this.registration(this.state.login, this.state.password, obj.setError, obj.updatetoken, obj.setLoading)}}> Registration</button> */}
                                </form>
                            </div>

                            :
                            <div className={classes.login}>LOADING...</div>
                        );
                    }
                }
            </Context.Consumer>
        );
    }
}

export default withRouter(Login);