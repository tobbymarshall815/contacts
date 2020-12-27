import React from 'react';

import classes from './add.module.css';
import {withRouter} from 'react-router-dom';

const BASE_URL = 'https://contacts-telran.herokuapp.com';

class Add extends React.Component{
    state = {
        fields:{
            address: '',
            description: '',
            email: '',
            id: '0',
            lastName: '',
            name: '',
            phone: '',
        },
        token:''
    }
    componentDidMount(){
        if(!localStorage.getItem('token')){
            this.props.history.push('./login');
        }else{
            this.setState({...this.state, token:localStorage.getItem('token')});
        }
    }

    addContact = (token, contact) => {
        let req = JSON.stringify(contact);
        console.log(req);
        return fetch(`${BASE_URL}/api/contact`, {
            method:"POST",
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                Authorization:token
            },
            body:req
        }).then(response => {
            if(response.ok){
                this.props.history.push('/contacts');
                console.log('ADDED SUCCSESSFULLY');
            }else{
                throw new Error(response.status);
            }
            
        })
    }


    render(){
        return(
            <div className={classes.main}>
                 <div className={classes.form}>
                    <input value={this.state.fields.name} placeholder='Name' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, name:e.target.value}})}}/>
                    <input value={this.state.fields.lastName} placeholder='Last Name' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, lastName:e.target.value}})}}/>
                    <input value={this.state.fields.phone} placeholder='Phone' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, phone:e.target.value}})}}/>
                    <input value={this.state.fields.email} placeholder='email' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, email:e.target.value}})}}/>
                    <input value={this.state.fields.address} placeholder='Address' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, address:e.target.value}})}}/>
                    <input value={this.state.fields.description} placeholder='desc' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, description:e.target.value}})}}/>
                    <button onClick={() => {this.addContact(this.state.token, this.state.fields)}}><b>Save</b></button>
                </div>
            </div>
                )
    }
}

export default withRouter(Add);