import React , { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const Contactconet = (contact) => {

    const [conect, setconect] = useState(contact.conectado);

    const cambiaEstado = () => {
        setconect(!conect)
    }

    return (
        <div>
            <h2> Estado : { conect ? 'Contacto en linea' : 'Contacto No Disponible' } </h2>
            <div>
                <button onClick={cambiaEstado}>
                    Cambiar estado.
                </button>
            </div>
        </div>
    );
};


Contactconet.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default Contactconet;
