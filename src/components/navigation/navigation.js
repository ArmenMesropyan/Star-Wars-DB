import React from 'react';

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav">
        <div className="container">
            <div className="nav-logo">
                <img src="logo.png" alt="Star Wars DB"/>
                <a className="navbar-brand" href="#">Star Wars DB</a>
            </div>
            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">People <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Starships</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;