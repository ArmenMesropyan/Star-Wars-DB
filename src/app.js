import React from 'react';
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
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    const swAPI = new SWApi();

    return (
        <ErrorBoundry>
            <SwapiContext.Provider value={swAPI}>
                <Router>
                    <Navigation />
                    <main className="main-content">
                        <RandomPlanet />
                        <Route path='/people' component={PeoplePage}/>
                        <Route path='/planets' component={PlanetPage}/>
                        <Route path='/starships' component={StarshipPage}/>
                    </main>
                </Router>
            </SwapiContext.Provider>
        </ErrorBoundry>
    )
};

export default App;