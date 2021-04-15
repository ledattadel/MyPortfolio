import React, { useState } from 'react';

const Button = (props) => {
   
    
    return (
        <div >
            <button  style={props.style} className={props.class} >{props.name}</button>
        </div>
    )
}

export default Button
