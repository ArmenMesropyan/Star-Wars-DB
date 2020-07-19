import React from 'react';
import { ListItem, Record, ErrorBoundry, SwapiConsumer } from '..';

const PlanetDetail = ({ itemID }) => (
    <ErrorBoundry>
        <SwapiConsumer>
            {({ getPlanetById, getImage }) => (
                <ListItem itemID={itemID}
                    getData={getPlanetById}
                    getImage={(id) => getImage('planets', id)}>
                        <Record label="Climate" field="climate"/>
                        <Record label="Diameter" field="diameter"/>
                        <Record label="Gravity" field="gravity"/>
                </ListItem>
            )}
        </SwapiConsumer>
    </ErrorBoundry>
);

const PeopleDetail = ({ itemID }) => (
    <ErrorBoundry>
        <SwapiConsumer>
            {({ getPersonById, getImage }) => (
                <ListItem itemID={itemID}
                          getData={getPersonById}
                          getImage={(id) => getImage('characters', id)}>
                            <Record label="Birth Year" field="birth_year"/>
                            <Record label="Eye Color" field="eye_color"/>
                            <Record label="Gender" field="gender"/>
                </ListItem>
            )}
        </SwapiConsumer>
    </ErrorBoundry>
);

const StarshipsDetail = ({ itemID }) => (
    <ErrorBoundry>
        <SwapiConsumer>
            {({ getStarshipById, getImage }) => (
                <ListItem itemID={itemID}
                          getData={getStarshipById}
                          getImage={(id) => getImage('starships', id)}>
                    <Record label="Consumables" field="consumables"/>
                    <Record label="Length" field="length"/>
                    <Record label="Model" field="model"/>
                </ListItem>
            )}
        </SwapiConsumer>
    </ErrorBoundry>
)

export { PlanetDetail, PeopleDetail, StarshipsDetail };