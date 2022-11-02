import React from "react";

import './Button.css';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'black' | 'green' | 'red'
};

export const Button: React.FC<ButtonProps> = ({children, color, onClick, ...props}) => {
    const className = `add-item__btn add-item__btn_${color}`;

    return(
        <div className="add-item__btn-wrapper">
            <button className={className} onClick={onClick}>
                {children}
            </button>
        </div> 
    );
};