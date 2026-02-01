const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://openlibrary.org/search.json', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


    //
    //TODO: return a formattedObj
    var formattedObj = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    }

    //TODO: return the formattedObject
    return formattedObj;
}
