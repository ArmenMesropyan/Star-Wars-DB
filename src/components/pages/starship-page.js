import React from 'react';
import {
    StarshipList,
    ErrorBoundry,
} from '..';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => (
    <ErrorBoundry>
        <section className="choice mb-3">
            <h2 className="visually-hidden">Select your starship</h2>
            <div className="container">
                <StarshipList clicked={(id) => history.push(id)}/>
            </div>
        </section>
    </ErrorBoundry>
);

export default withRouter(StarshipPage);