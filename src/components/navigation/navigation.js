import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '..';

const Navigation = (props) => {
    const links = [
        {
            label: 'People',
            link: '/people/'
        },
        {
            label: 'Planets',
            link: '/planets/'
        },
        {
            label: 'Starships',
            link: '/starships/'
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav">
            <div className="container">
                <div className="nav-logo">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Star Wars DB"/>
                    <Link className="navbar-brand" to="/">Star Wars DB</Link>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        {
                            links.map(({ label, link }, index) => (
                                <li 
                                    className={`nav-item ${index === props.active ? 'active': ''}`}
                                    key={index}
                                >
                                    <Link className="nav-link" to={link}>{label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <Search {...props}/>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;