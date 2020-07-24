class SWApi {
    constructor() {
        this.baseURl = 'https://swapi.dev/api';
    }

    async fetchData(endpoint) {
        try {
            return await fetch(`${this.baseURl}${endpoint}`).then(resp => resp.json());
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getAllPlanets = async() => {
        const { results } = await this.fetchData('/planets');
        return this._transformData(results);
    }

    getAllPeople = async() => {
        const { results } = await this.fetchData('/people');
        return this._transformData(results);
    }

    getAllStarships = async() => {
        const { results } = await this.fetchData('/starships');
        return this._transformData(results);
    }

    getPlanetById = async(id = 1) => {
        const planet = await this.fetchData(`/planets/${id}`);
        return { id: this._getID(planet.url), ...planet };
    }

    getPersonById = async(id = 1) => {
        const person = await this.fetchData(`/people/${id}`);
        return { id: this._getID(person.url), ...person };
    }

    getStarshipById = async(id = 1) => {
        const starship = await this.fetchData(`/starships/${id}`);
        return { id: this._getID(starship.url), ...starship };
    }

    getStarshipByQuery = async(query = '') => {
        const { results: [starship] } = await this.fetchData(`/starships/?search=${query}`);
        console.log('starship: ', starship);
        if (!starship) return Promise.reject({ error: 'Not Found' }); 
        return { id: this._getID(starship.url), ...starship };
    }

    getPersonByQuery = async(query = '') => {
        const { results: [person] } = await this.fetchData(`/people/?search=${query}`);
        console.log('person: ', person);
        if (!person) return Promise.reject({ error: 'Not Found' }); 
        return { id: this._getID(person.url), ...person };
    }

    getPlanetByQuery = async(query = '') => {
        const { results: [planet] } = await this.fetchData(`/planets/?search=${query}`);
        console.log('planet: ', planet);
        if (!planet) return Promise.reject({ error: 'Not Found' }); 
        return { id: this._getID(planet.url), ...planet };
    }

    getImage(type, id) {
        return `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`
    }

    _getID(url) {
        const regExp = /\/([0-9]*)\/$/;
        return url.match(regExp)[1];
    }

    _transformData(list) {
        return list.map(item => ({id: this._getID(item.url), ...item}))
    }
}

export default SWApi;