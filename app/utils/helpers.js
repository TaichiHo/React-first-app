/**
 * Created by Taichi1 on 8/7/15.
 */
var axios = require('axios');
function getRepos(username) {
    "use strict";
    return axios.get('https:api.github.com/users/' + username + "/repos");
}

function getUserInfo(username) {
    "use strict";
    return axios.get('https://api.github.com/users/' + username);
}

var promiseObj = getRepos("tylermcginnis");
promiseObj.then(function (data) {
    "use strict";
    console.log(data);
});

var helpers = {
    getGithubInfo: function (username) {
        "use strict";
        return axios.all([getRepos(username), getUserInfo(username)])
            .then(function (arr) {
                return{
                    repos: arr[0].data,
                    bio: arr[1].data
                }
            })
    }
};

module.exports = helpers;