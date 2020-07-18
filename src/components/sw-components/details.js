import React from 'react';
import { ListItem, Record, ErrorBoundry } from '..';
import { SWApi } from '../../services';

const { getPlanetById, getPersonById, getStarshipById, getImage } = new SWApi();

const PlanetDetail = ({ itemID }) => (
    <ListItem itemID={itemID}
              getData={getPlanetById}
              getImage={(id) => getImage('planets', id)}>
                  <Record label="Climate" field="climate"/>
                  <Record label="Diameter" field="diameter"/>
                  <Record label="Gravity" field="gravity"/>
    </ListItem>
);

const PeopleDetail = ({ itemID }) => (
    <ListItem itemID={itemID}
              getData={getPersonById}
              getImage={(id) => getImage('characters', id)}>
                  <Record label="Birth Year" field="birth_year"/>
                  <Record label="Eye Color" field="eye_color"/>
                  <Record label="Gender" field="gender"/>
    </ListItem>
);

const StarshipsDetail = ({ itemID }) => (
    <ListItem itemID={itemID}
              getData={getStarshipById}
              getImage={(id) => getImage('starships', id)}>
                  <Record label="Consumables" field="consumables"/>
                  <Record label="Length" field="length"/>
                  <Record label="Model" field="model"/>
    </ListItem>
)

export { PlanetDetail, PeopleDetail, StarshipsDetail };