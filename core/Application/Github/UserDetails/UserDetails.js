const axios = require('axios');

class UserDetails {
    #baseURL = 'http://api.github.com/users';

    async handle(username) {
        try {
            const response = await axios.get(`${this.#baseURL}/${username}`);
            if (response.status !== 200) {
                throw new Error('Github API Error');
            }
            return response.data;
        } catch (error) {
            console.log(error.response.body)
        }
    }
}

module.exports = UserDetails;