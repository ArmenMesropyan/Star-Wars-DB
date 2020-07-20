import React, { useState } from 'react';
import './app.css';
import { 
    Navigation,
    RandomPlanet,
    PeoplePage,
    PlanetPage,
    StarshipPage,
    ErrorBoundry,
    SwapiContext,
} from './components';
import { SWApi } from './services';

const App = () => {
    const swAPI = new SWApi();

    return (
        <ErrorBoundry>
            <SwapiContext.Provider value={swAPI}>
                <Navigation />
                <main className="main-content">
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />
                </main>
            </SwapiContext.Provider>
        </ErrorBoundry>
    )
};

export default App;
