import React, { useState } from 'react';
import './app.css';
import { 
    Navigation,
    RandomPlanet,
    PeoplePage,
    PlanetPage,
    StarshipPage,
    ErrorBoundry,
    SwapiProvider,
} from './components';
import { SWApi } from './services';

const App = () => {
    const swAPI = new SWApi();

    return (
        <ErrorBoundry>
            <SwapiProvider value={swAPI}>
                <Navigation />
                <main className="main-content">
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />
                </main>
            </SwapiProvider>
        </ErrorBoundry>
    )
};

export default App;
