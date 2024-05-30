/* eslint-disable arrow-parens */
/* eslint-disable indent */
function handleResponseFromAPI(promise) {
    return promise
        .then((response) => {
            console.log('Got a response from the API');
            return {
                status: 200,
                body: response,
            };
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
            console.log('Got a response from the API');
            return new Error();
        });
}

export default handleResponseFromAPI;
