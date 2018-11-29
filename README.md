# react-giphy-workshop-gif-searcher

## Usage

```sh
npm install git://github.com/brock-noah/react-giphy-workshop-gif-searcher.git
```

```js
import gifSeacher from 'react-giphy-workshop-gif-searcher'

const gifMe = gifSeacher('GIPHY_API_KEY')

gifMe('Hello World').then(console.log).catch(console.error)
```
