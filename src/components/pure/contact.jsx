import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import Contactconet from './contactconet';


const ContactComponent = () => {

    const defaultContact = new Contact('PEDRO','TROglio','fs@gamil.com',false);

    return (
        <div>
            <h4> Nombre : { defaultContact.nombre } </h4>
            <h4> Apellido : { defaultContact.apellido} </h4>
            <h5> E-mail : { defaultContact.email } </h5>
            <Contactconet contact={ defaultContact }></Contactconet>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
