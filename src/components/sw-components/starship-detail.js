import React from 'react';
import { ListItem, Record, ErrorBoundry, withSwapiAPI } from '..';

const StarshipDetail = (props) => (
    <ErrorBoundry>
        <ListItem {...props}>
            <Record label="Consumables" field="consumables"/>
            <Record label="Length" field="length"/>
            <Record label="Model" field="model"/>
        </ListItem>
    </ErrorBoundry>
)

const mapServiceToProps = ({ getStarshipById, getImage }) => ({
    getData: getStarshipById,
    getImage: (id) => getImage('starships', id),
});

export default withSwapiAPI(StarshipDetail, mapServiceToProps);