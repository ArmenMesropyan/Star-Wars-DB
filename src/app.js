import React, { useState } from 'react';
import './app.css';
import { 
    Navigation,
    RandomPlanet,
    ListItems,
    ListItem,
    Record,
    Columns,
    ErrorBoundry
} from './components';
import { SWApi } from './services';

const App = () => {
    const { getAllPlanets, getPlanetById } = new SWApi();
    const [itemID, setItemID] = useState(3);

    const onItemClicked = (id) => setItemID(id);

    const listItems = (
        <ErrorBoundry>
            <ListItems getData={getAllPlanets} clicked={onItemClicked}>
                {(i) => <button>{`${i.name}`}</button>}
            </ListItems>
        </ErrorBoundry>
    );

    const listItem = (
        <ErrorBoundry>
            <ListItem itemID={itemID} getData={getPlanetById}>
                <Record field="diameter" label="Diameter"/>
                <Record field="gravity" label="Gravity"/>
            </ListItem>
        </ErrorBoundry>
    );

    return (
        <>
            <Navigation />
            <main className="main-content">
                <ErrorBoundry>
                    <RandomPlanet />
                </ErrorBoundry>
                <section className="choice mb-3">
                    <h2 className="visually-hidden">Select your person</h2>
                    <Columns first={listItems} second={listItem} />
                </section>
            </main>
        </>
    )
};

export default App;
