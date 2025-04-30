import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Positive Thoughts</h1>
            <nav>
                <ul>
                    <li><a href="#thoughts">Thoughts</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;