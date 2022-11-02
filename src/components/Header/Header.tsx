import React from "react";

import './Header.css';

interface HeaderProps {
    todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({todoCount}) => (
    
    <header className='header'>
        <div className='header__container'>
            <h1 className='header__title'>
                Todo list {todoCount} task(s)
            </h1>
        </div>
    </header>
    
);

