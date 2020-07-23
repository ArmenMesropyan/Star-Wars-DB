import React from 'react';
import {
    PeopleList,
    PeopleDetail,
    Columns,
    ErrorBoundry,
} from '..';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ match, history }) => {
    const { id } = match.params;
    return (
        <ErrorBoundry>
            <section className="choice mb-3">
                <h2 className="visually-hidden">Select your person</h2>
                <Columns
                    first={<PeopleList clicked={(id) => history.push(id)}/>}
                    second={<PeopleDetail itemID={id}/>} />
            </section>
        </ErrorBoundry>
    )
};

export default withRouter(PeoplePage);