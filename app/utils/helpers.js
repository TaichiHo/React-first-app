/**
 * Created by Taichi1 on 8/7/15.
 */
//var axios = require('axios');

import axios from 'axios';

function getRepos(username) {
    "use strict";
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
    "use strict";
    return axios.get(`https://api.github.com/users/${username}`);
}

var promiseObj = getRepos("tylermcginnis");
promiseObj.then(function (data) {
    "use strict";
    console.log(data);
});

var helpers = {
    getGithubInfo(username) {
        "use strict";
        return axios.all([getRepos(username), getUserInfo(username)])
            .then((arr) => {
                return {
                    repos: arr[0].data,
                    bio: arr[1].data
                }
            })
    }
};

export default helpers;