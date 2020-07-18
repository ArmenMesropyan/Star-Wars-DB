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
    ErrorBoundry
} from './components';
import { SWApi } from './services';

const App = () => {
    const { getAllPlanets, getPlanetById, getImage } = new SWApi();
    const [itemID, setItemID] = useState(3);

    const onItemClicked = (id) => setItemID(id);

    const listItems = (
        <>
            <PlanetList clicked={onItemClicked}>
                {(i) => <button>{`${i.name}`}</button>}
            </PlanetList>
            <PeopleList clicked={onItemClicked}>
                {(i) => <button>{`${i.name}`}</button>}
            </PeopleList>
            <StarshipList clicked={onItemClicked}>
                {(i) => <button>{`${i.name}`}</button>}
            </StarshipList>
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
