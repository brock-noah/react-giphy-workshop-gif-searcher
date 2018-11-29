var GphApiClient = require('giphy-js-sdk-core')

var deserializeGif = function(gif) {
  return ({
    id: gif.id,
    url: gif.url,
    title: gif.title,
    image: gif.images.original,
  })
}

var search = function(client) {
  return function(query) {
    return client.search('gifs', {
      q: query,
      limit: 5,
      rating: 'g',
      fmt: 'json'
    }).then(function(responseData) {
      return responseData.data.map(deserializeGif)
    })
  }
}

var gifSeacher = function(apiKey) {
  if (!apiKey) {
    console.error('react-giphy-workshop-gif-searcher: You must supply an API key to gifSearcher')
    return;
  }

  var client = null

  return function(query) {
    if (client) {
      return search(client)(query)
    } else {
      client = GphApiClient(apiKey)
      return search(client)(query)
    }
  }
}

module.exports = gifSeacher
