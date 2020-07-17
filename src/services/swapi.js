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
        const planets = await this.fetchData('/planets');
        return planets;
    }

    getPlanetById = async(id = 1) => {
        const { results } = await this.fetchData(`/planets/${id}`);
        return results;
    }
}

export default SWApi;