import React from 'react';

import {withRouter} from 'react-router-dom';

import tech from '../../img/technology.png';
import media from '../../img/multimedia.png';
import address from '../../img/buildings.png';

import Form from '../form-component/form'

import classes from '../contact-item-detailed-component/contact-item-detailed.module.css';
import { Context } from '../../App';


class contact_item_detailed extends React.Component{
    state= {
        contacts:this.props.contacts,
        editmode:false,
        token:'',
        addmode:this.props.addmode
    }

    componentDidMount(){
        if(!localStorage.getItem('token')){
            this.props.history.push('./login');
        }
    }

    changemode = (mode) => {
        this.setState({...this.state, editmode:false})
    }

    render(){  
        let contact = this.props.contacts[this.props.match.params.id];
        switch(this.state.editmode){
            case false:
                return (
                    <Context.Consumer>
                        {
                            obj => {
                                return(
                                    <div className={classes.card}>
                                        <h2>{contact.name} {contact.lastName}</h2>
                                        <img src ={tech} alt='tech'/> {contact.phone} <br/>
                                        <img src ={media} alt='media'/> {contact.email} <br />
                                        <img src ={address} alt='buildings'/> {contact.address} <br />
                                        <h3>Description: {contact.description}</h3>
                                        <button onClick={() => {this.setState({...this.state, editmode:true, token:obj.token})}}>Edit</button>
                                        <button onClick={() => {this.props.deleteById(obj.token, contact.id)}}>Remove</button>
                                    </div>
                                );
                            }
                            
                        }
                    </Context.Consumer>
                ); 
            case true:
                return <Form contact={contact} fun={this.props.updateContact} token={this.state.token} id={this.props.match.params.id} changemode={this.changemode} id={this.props.match.params.id}/>
        }
    }
}

export default withRouter(contact_item_detailed);
