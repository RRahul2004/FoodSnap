// Code for the logout button on the navbar

import React from 'react';
import './button.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    ButtonStyle,
    ButtonSize
}) =>{
    const checkStyle = STYLES.includes(ButtonStyle) ? ButtonStyle : STYLES[0];

    const checkSize = SIZES.includes(ButtonSize) ? ButtonSize : SIZES[0];

    return(
        <div className={"log-btn"}>
            <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </div>
    )
}