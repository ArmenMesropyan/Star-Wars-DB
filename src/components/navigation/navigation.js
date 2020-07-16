import React from 'react';

const Navigation = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="nav-logo">
            <img src="logo.png"/>
            <a class="navbar-brand" href="#">Star DB</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;