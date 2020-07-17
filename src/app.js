import React from 'react';
import './app.css';
import { 
    Navigation,
    RandomPlanet,
    ListItems,
    ListItem,
    Columns
} from './components';
import { SWApi } from './services';

const App = () => {
    const { getAllPlanets } = new SWApi();
    const listItems = (
        <ListItems getData={getAllPlanets}>
            {(i) => <button>{`${i.name}`}</button>}
        </ListItems>
    );

    return (
        <>
            <Navigation />
            <main className="main-content">
                <RandomPlanet />
                <section className="choice mb-3">
                    <h2 className="visually-hidden">Select your person</h2>
                    <Columns first={listItems} second={<ListItem />} />
                </section>
            </main>
        </>
    )
};

export default App;
