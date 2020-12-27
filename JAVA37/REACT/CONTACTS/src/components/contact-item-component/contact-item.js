import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from '../contact-item-component/contact-item.module.css';



const contact_item = (props) => {
    return(
        <div className={classes.card} onClick={() => {props.history.push(`/contacts/${props.id}`)}}>
            <h2>{props.name} {props.lastname}</h2>
            <h3>{props.phone}</h3>
        </div>
    );
}


export default withRouter(contact_item);