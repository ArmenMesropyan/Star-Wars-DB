import React from 'react';
import { withData, ListItems } from '..';
import { SWApi } from '../../services';

const { getAllPlanets, getAllPeople, getAllStarships } = new SWApi();

const withChildren = (View, render) => {
    return (props) => (
        <View {...props}>
            { render }
        </View>
    )
}

const renderName = ({name}) => <button>{name}</button>

const PlanetList = withData(
    withChildren(ListItems, renderName),
    getAllPlanets
)
const PeopleList = withData(
    withChildren(ListItems, renderName),
    getAllPeople
)
const StarshipList = withData(
    withChildren(ListItems, renderName),
    getAllStarships
)

export { PlanetList, PeopleList, StarshipList };