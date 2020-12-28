import React from 'react';

import classes from '../form-component/form.module.css';

export default class extends React.Component{
    state = {
        fields:{
            address: this.props.contact.address,
            description: this.props.contact.description,
            email: this.props.contact.email,
            id: this.props.contact.id,
            lastName: this.props.contact.lastName,
            name: this.props.contact.name,
            phone: this.props.contact.phone,
        }
    }

    render(){
        return(<div className={classes.form}>
                    <input value={this.state.fields.name} placeholder='Name' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, name:e.target.value}})}}/>
                    <input value={this.state.fields.lastName} placeholder='Last Name' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, lastName:e.target.value}})}}/>
                    <input value={this.state.fields.phone} placeholder='Phone' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, phone:e.target.value}})}}/>
                    <input value={this.state.fields.email} placeholder='email' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, email:e.target.value}})}}/>
                    <input value={this.state.fields.address} placeholder='Address' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, address:e.target.value}})}}/>
                    <input value={this.state.fields.description} placeholder='desc' onChange={(e) => {this.setState({...this.state, fields:{...this.state.fields, description:toString(e.target.value)}})}}/>
                    <br />
                    <button onClick={() => {this.props.fun(this.props.token, this.state.fields, this.props.id); this.props.changemode()}}>Save</button>
                </div>)
    }
}

