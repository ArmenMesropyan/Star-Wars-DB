import React from 'react';
import { ListItem, Record, ErrorBoundry, withSwapiAPI } from '..';

const PlanetDetail = (props) => (
    <ErrorBoundry>
        <ListItem {...props}>
                <Record label="Climate" field="climate"/>
                <Record label="Diameter" field="diameter"/>
                <Record label="Gravity" field="gravity"/>
        </ListItem>
    </ErrorBoundry>
);

const mapServiceToProps = ({ getPlanetById, getImage }) => ({
    getData: getPlanetById,
    getImage: (id) => getImage('planets', id),
});

export default withSwapiAPI(PlanetDetail, mapServiceToProps);