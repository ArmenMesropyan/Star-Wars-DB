import React from 'react';
import './app.css';
import { 
    PlanetNavigation,
    PeopleNavigation,
    StarshipNavigation,
    RandomPlanet,
    PeoplePage,
    PlanetPage,
    StarshipPage,
    ErrorBoundry,
    SwapiContext,
    StarshipDetail,
} from './components';
import { SWApi } from './services';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
    const swAPI = new SWApi();

    return (
        <ErrorBoundry>
            <SwapiContext.Provider value={swAPI}>
                <Router>
                    <StarshipNavigation />
                    <main className="main-content">
                        <RandomPlanet />
                        <Switch>
                            <Route path='/people/:id?' component={PeoplePage} exact/>

                            <Route path='/planets/:id?' component={PlanetPage} exact/>

                            <Route path='/starships/' component={StarshipPage} exact/>
                            <Route path='/starships/:id' render={({ match }) => {
                                const { id } = match.params;
                                return <StarshipDetail itemID={id}/>
                            }}/>

                            <Redirect to='/'/>
                        </Switch>
                    </main>
                </Router>
            </SwapiContext.Provider>
        </ErrorBoundry>
    )
};

export default App;