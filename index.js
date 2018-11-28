var GphApiClient = require('giphy-js-sdk-core')

var deserializeGif = function(gif) {
  id: gif.id,
  url: gif.url,
  title: gif.title,
  image: gif.images.original,
}

var search = function(client, deserializer) {
  if (typeof deserialzier === "undefined") {
    deserializer = deserializeGif
  }

  return function(query) {
    return client.search('gifs', {
      q: query,
      limit: 5,
      rating: 'g',
      fmt: 'json'
    }).then(function(responseData) {
      return responseData.data.map(deserializer)
    })
  }
}

var gifSeacher = function(apiKey, deserializer) {
  if (!apiKey) {
    console.error('You must supply and API key to gifSearch')
    return;
  }

  var client = null

  return function(query) {
    if (client) {
      return search(client, deserializer)(query)
    } else {
      client = GphApiClient(apiKey)
      return search(client, deserializer)(query)
    }
  }
}

module.exports = gifSeacher

