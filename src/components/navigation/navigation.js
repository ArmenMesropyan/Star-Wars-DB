import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '..';

const Navigation = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav">
        <div className="container">
            <div className="nav-logo">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Star Wars DB"/>
                <Link className="navbar-brand" to="/">Star Wars DB</Link>
            </div>
            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/people/">People <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets/">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships/">Starships</Link>
                    </li>
                </ul>
                <Search {...props}/>
            </div>
        </div>
    </nav>
);

export default Navigation;