const express = require('express');
const router = express.Router();
const githubSearchController = require('../Controllers/GithubSearchController');

router.get('/users', githubSearchController.user_list);
router.get('/users/:username', githubSearchController.user_details);
router.get('/users/:username/repos', githubSearchController.user_repos);

module.exports = router;