import React from 'react';
import './app.css';
import { 
    Navigation,
    RandomPlanet,
    ListItems,
    ListItem,
    Columns
} from './components';

const App = () => (
    <>
        <Navigation />
        <RandomPlanet />
        <section className="choice mb-3">
            <h2 className="visually-hidden">Select your person</h2>
            <Columns first={<ListItems />} second={<ListItem />} />
        </section>
    </>
);

export default App;