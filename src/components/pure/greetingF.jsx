import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // breve introduccion a useState
    const [age, setage] = useState(29);

    const birthday = () =>{
        setage(age + 1)
    }

    return (
        <div>            
            <h1>
                GREETING HELLO {props.name}  desde component funcional!!! 
            </h1>
            <h2>
                Tu edad es de : { age}
            </h2>
            <div>
                <button onClick={birthday}> 
                    Cumpli años
                </button>
            </div>            
        </div>
    );
};


GreetingF.propTypes = {
    name:PropTypes.string
};


export default GreetingF;
