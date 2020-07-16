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

    getPlanetById = async(id = 1) => {
        const planet = await this.fetchData(`/planets/${id}`);
        return planet;
    }
}

export default SWApi;