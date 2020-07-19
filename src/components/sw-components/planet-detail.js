import React from 'react';
import { ListItem, Record, ErrorBoundry, withSwapiAPI } from '..';
console.log('withSwapiAPI: ', withSwapiAPI);

const PlanetDetail = ({ itemID, swapiService: { getPlanetById, getImage } }) => (
    <ErrorBoundry>
        <ListItem itemID={itemID}
            getData={getPlanetById}
            getImage={(id) => getImage('planets', id)}>
                <Record label="Climate" field="climate"/>
                <Record label="Diameter" field="diameter"/>
                <Record label="Gravity" field="gravity"/>
        </ListItem>
    </ErrorBoundry>
);

export default withSwapiAPI(PlanetDetail);