import React from 'react';
import './app.css';
import { Navigation, RandomPlanet, ListItems } from './components';

const App = () => (
    <>
        <Navigation />
        <RandomPlanet />
        <section className="choice mb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <ListItems />
                    </div>
                    <div className="col-md-5">
                        {/* <Card /> */}
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default App;