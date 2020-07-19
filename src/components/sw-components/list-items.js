import React from 'react';
import { withData, withSwapiAPI, ListItems } from '..';

const withChildren = (View, render) => {
    return (props) => (
        <View {...props}>
            { render }
        </View>
    )
}

const renderName = ({name}) => <button>{name}</button>

const mapPlanetDataToProps = (service) => ({
    getData: service.getAllPlanets
})

const mapPeopleDataToProps = (service) => ({
    getData: service.getAllPeople
})

const mapStarshipDataToProps = (service) => ({
    getData: service.getAllStarships
})

const PlanetList = withSwapiAPI(
    withData(
        withChildren(ListItems, renderName)
    ),
    mapPlanetDataToProps
)
const PeopleList = withSwapiAPI(
    withData(
        withChildren(ListItems, renderName)
    ),
    mapPeopleDataToProps
)
const StarshipList = withSwapiAPI(
    withData(
        withChildren(ListItems, renderName)
    ),
    mapStarshipDataToProps
)

export { PlanetList, PeopleList, StarshipList };