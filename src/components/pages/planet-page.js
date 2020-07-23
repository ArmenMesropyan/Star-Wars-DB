import React from 'react';
import {
    PlanetList,
    PlanetDetail,
    Columns,
    ErrorBoundry,
} from '..';
import { withRouter } from 'react-router-dom';

const PlanetPage = ({ match, history }) => {
    const { id } = match.params;
    return (
        <ErrorBoundry>
            <section className="choice mb-3">
                <h2 className="visually-hidden">Select your planet</h2>
                <Columns
                    first={<PlanetList clicked={(id) => history.push(id)}/>}
                    second={<PlanetDetail itemID={id}/>} />
            </section>
        </ErrorBoundry>
    )
}

export default withRouter(PlanetPage);