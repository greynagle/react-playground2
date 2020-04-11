import React from 'react'
import './Split.css'

export default function Split(props) {
const combinedClassName = `split ${props.className}`;
const newStyles = {flex: props.flexBasis};
    return(
        <div 
            className={combinedClassName}
            style={newStyles}
        >
            {props.children}
        </div>
    )
}