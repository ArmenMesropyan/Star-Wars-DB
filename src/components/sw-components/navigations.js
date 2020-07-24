import { Navigation, withSwapiAPI, withData } from '..';

const mapPlanetDataToProps = (service) => ({
    getData: service.getPlanetByQuery,
    placeholder: 'Search Planet',
    active: 1,
})

const mapStarshipDataToProps = (service) => ({
    getData: service.getStarshipByQuery,
    placeholder: 'Search Starship',
    active: 2,
})

const mapPeopleDataToProps = (service) => ({
    getData: service.getPersonByQuery,
    placeholder: 'Search Person',
    active: 0,
})

const PlanetNavigation = withSwapiAPI(
    withData(Navigation),
    mapPlanetDataToProps
)

const StarshipNavigation = withSwapiAPI(
    withData(Navigation),
    mapStarshipDataToProps
)

const PeopleNavigation = withSwapiAPI(
    withData(Navigation),
    mapPeopleDataToProps
)

export { PlanetNavigation, StarshipNavigation, PeopleNavigation }