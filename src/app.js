import React, { useState } from 'react';
import './app.css';
import { 
    Navigation,
    RandomPlanet,
    PlanetList,
    PeopleList,
    StarshipList,
    PlanetDetail,
    PeopleDetail,
    StarshipsDetail,
    Columns,
    ErrorBoundry,
    SwapiProvider,
} from './components';
import { SWApi } from './services';

const App = () => {
    const swAPI = new SWApi();
    const [itemID, setItemID] = useState(3);

    const onItemClicked = (id) => setItemID(id);

    const listItems = (
        <>
            <PlanetList clicked={onItemClicked}/>
            <PeopleList clicked={onItemClicked}/>
            <StarshipList clicked={onItemClicked}/>
        </>
    );

    const listItem = (
        <>
            <PlanetDetail itemID={itemID}/>
            <PeopleDetail itemID={itemID}/>
            <StarshipsDetail itemID={itemID}/>
        </>
    );

    return (
        <>
            <SwapiProvider value={swAPI}>
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
            </SwapiProvider>
        </>
    )
};

export default App;
