const SearchUser = require('../../core/Application/Github/SearchUser/SearchUser');
const UserDetails = require('../../core/Application/Github/UserDetails/UserDetails');
const GetUserRepos = require('../../core/Application/Github/GetUserRepos/GetUserRepos');

exports.user_list = async (req, res) => {
    try {
        const since = req.query.since;
        const searchUserService = new SearchUser();
        const result = await searchUserService.handle(since, 10);
        res.send(result);
    } catch (error) {
        res.status(500).send('Something went wrong!');
    }
}

exports.user_details = async (req, res) => {
    try {
        const username = req.params.username;
        const userDetailsService = new UserDetails();
        const result = await userDetailsService.handle(username);
        res.send(result);
    } catch (error) {
        res.status(500).send('Something went wrong!');
    }
}

exports.user_repos = async (req, res) => {
    try {
        const username = req.params.username;
        const getUserReposService = new GetUserRepos();
        const result = await getUserReposService.handle(username);
        res.send(result);
    } catch (error) {
        res.status(500).send('Something went wrong!');
    }
}