import React from 'react';
import { ListItem, Record, ErrorBoundry, withSwapiAPI } from '..';

const StarshipsDetail = ({ itemID, swapiService: { getStarshipById, getImage } }) => (
    <ErrorBoundry>
        <ListItem itemID={itemID}
                    getData={getStarshipById}
                    getImage={(id) => getImage('starships', id)}>
            <Record label="Consumables" field="consumables"/>
            <Record label="Length" field="length"/>
            <Record label="Model" field="model"/>
        </ListItem>
    </ErrorBoundry>
)

export default withSwapiAPI(StarshipsDetail);