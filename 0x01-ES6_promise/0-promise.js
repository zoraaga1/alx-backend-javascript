/* eslint-disable quotes */
/* eslint-disable indent */
// 0-promise.js

function getResponseFromAPI() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 1000);
    });
}

export default getResponseFromAPI;
