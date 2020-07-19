import React from 'react';
import { ListItem, Record, ErrorBoundry, withSwapiAPI } from '..';

const PeopleDetail = (props) => (
    <ErrorBoundry>
        <ListItem {...props}>
                <Record label="Birth Year" field="birth_year"/>
                <Record label="Gender" field="gender"/>
                <Record label="Eye Color" field="eye_color"/>
        </ListItem>
    </ErrorBoundry>
);

const mapServiceToProps = ({ getPersonById, getImage }) => ({
    getData: getPersonById,
    getImage: (id) => getImage('characters', id),
});

export default withSwapiAPI(PeopleDetail, mapServiceToProps);