const axios = require('axios');

class SearchUsers {
    #baseURL = 'http://api.github.com/users';

    async handle(since, perPage) {
        try {
            const response = await axios.get(`${this.#baseURL}?since=${since}&per_page=${perPage}`);
            if (response.status !== 200) {
                throw new Error('Github API Error');
            }
            return response.data;
        } catch (error) {
            console.log(error.response.body)
        }
    }
}

module.exports = SearchUsers;