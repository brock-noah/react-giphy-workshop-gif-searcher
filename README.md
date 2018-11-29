# react-giphy-workshop-gif-searcher

A wrapper around the [giphy-js-sdk-core](https://github.com/Giphy/giphy-js-sdk-core) for simple searching.

## Usage

```sh
npm install git://github.com/brock-noah/react-giphy-workshop-gif-searcher.git
```

```js
// Import the module
import gifSeacher from 'react-giphy-workshop-gif-searcher'

// Initialize with a valid API key
const gifMe = gifSeacher('GIPHY_API_KEY')

// Accepts a search string, returns a promise
gifMe('Hello World').then(console.log).catch(console.error)
```
