import { withData, ListItems } from '..';
import { SWApi } from '../../services';

const { getAllPlanets, getAllPeople, getAllStarships } = new SWApi();

const PlanetList = withData(ListItems, getAllPlanets);
const PeopleList = withData(ListItems, getAllPeople);
const StarshipList = withData(ListItems, getAllStarships);

export { PlanetList, PeopleList, StarshipList };