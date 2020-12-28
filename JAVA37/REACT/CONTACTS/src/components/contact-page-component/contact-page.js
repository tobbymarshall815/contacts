import React from 'react';

import {withRouter, Route} from 'react-router-dom';


import ContactItemDetailed from '../contact-item-detailed-component/contact-item-detailed';
import Contactitem from '../contact-item-component/contact-item';
import classes from '../contact-page-component/contact-page.module.css';



const BASE_URL = 'https://contacts-telran.herokuapp.com';

class ContactPage extends React.Component{

    state = {
        contacts: [],
        fetching:true
    }

    componentDidMount(){
        if(!localStorage.getItem('token')){ 
            this.props.history.push('/login');
        }else{
            this.getAllContacts(localStorage.getItem('token'));
        }
    }

    getAllContacts(token){
        return fetch(`${BASE_URL}/api/contact`,{
            method:'GET',
            headers:{
                Authorization:token
            }
        }).then(response => {
            if(response.ok){
                response.json().then((response) => {
                    this.setState({contacts:[...response.contacts], fetching:false});
                })
            }else{
                console.log(response.code);
            }
        });
    }

    deleteById = (token, id) => {
        return fetch(`${BASE_URL}/api/contact/${id}`,{
            method: 'DELETE',
            headers: {
                Authorization:token
            }
        }).then(response => {
            if(response.ok){         
                response.json().then((response) => {
                    this.props.history.push('/contacts');
                    this.getAllContacts(token);
                }) 
            }else{
                this.props.history.push('/contacts');
                console.log(response.code);
            }
            
        });
    }

    updateContact = (token, contact, id) => {
        let req = JSON.stringify(contact);
        console.log('UPDATE CONTACT:', req);
        return fetch(`${BASE_URL}/api/contact`, {
            method:"PUT",
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                Authorization:token
            },
            body:req
        }).then(response => {
            if(response.ok){
                console.log('CONTACT UPDATED!', response.status);
                this.props.history.push(`/contacts/${id}`);
                this.getAllContacts(token);

            }else{
                console.log(response.code);
            }
            
        })
    }


    render(){
        if(this.state.contacts.length === 0 && !this.state.fetching){
            return (
            <div className={classes.message}>
                <h1> No Contacts here!</h1>
                <h2>Add new by clicking on Add in NavBar!</h2>
            </div>
            );
        }
        if(!this.state.fetching){
            return(<div className={classes.main}>
                <div className={classes.contactspage}>
                    
                    <div className={classes.leftdiv}>
                        <div className={classes.sidebar}>
                        {this.state.contacts.map((contact, index) => {
                            return (<Contactitem key={index} id={index} name={contact.name} lastname={contact.lastname} phone={contact.phone} changemode={this.changemode}/>);
                        })}
                        </div>
                    </div>
                    <div className={classes.rightdiv}>
                        <Route path='/contacts/:id' render={(props) => { return <ContactItemDetailed {...props} contacts={this.state.contacts} deleteById={this.deleteById} updateContact ={this.updateContact}/>}}/>
                    </div>
                </div>
            </div>);
        }else{
            return(<div style={{height:"90vh", color: "grey", textAlign:"center", backgroundColor:"rgba(230, 228, 228, 0.738)", borderRadius:"5px", display:"flex", alignItems:"center"}}><b style={{margin:"150px auto"}}>Loading...</b></div>);
        }
    }
}

export default withRouter(ContactPage);
