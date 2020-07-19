import React from 'react';
import { ListItem, Record, ErrorBoundry, withSwapiAPI } from '..';

const PeopleDetail = ({ itemID, swapiService: { getPersonById, getImage } }) => (
    <ErrorBoundry>
        <ListItem itemID={itemID}
            getData={getPersonById}
            getImage={(id) => getImage('characters', id)}>
                <Record label="Birth Year" field="birth_year"/>
                <Record label="Gender" field="gender"/>
                <Record label="Eye Color" field="eye_color"/>
        </ListItem>
    </ErrorBoundry>
);

export default withSwapiAPI(PeopleDetail);