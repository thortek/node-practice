<img src="http://i.imgur.com/UzC7XPe.png" alt="Helio Training" width="226" align="center"/> v1.0

---------------
# Node Boilerplate

This repo provides a very simple starting point for creating anything with node. It
includes babel and gives you the ability to write in ES2015 Stage 2 along with Standard
JS linting. 

#### Installed Libraries

```text
babel-cli (node)
eslint (JS Standard config)
mocha (sinon & chai as well)
nodemon
```

## Installation
```sh
# Clone this repo (or fork into your own)
git clone https://github.com/helio-training/helio-node-boilerplate.git node-project && cd node-project

# Using npm?
npm i && npm start

# Using yarn?
yarn install && yarn start
```

## Production Builds
We shouldn't use babel-node when serving our application in production. We need to
compile our ES2015 code into code node will understand without babel. 

In order to do this we can run:

```sh
# Using npm?
npm build

# Using yarn?
yarn build
```

This will create a folder (`/dist`) that you can run directly with node. A simple
server script is included as an example. This script requires you to have ran the 
above build script first.

```sh
# Using npm?
npm serve

# Using yarn?
yarn serve
```

## Extending
This template is easily extendable as it's just a barebones template utilizing newer
javascript standards.

A few modified versions are listed below:

* [Express Starter]()
* [GraphQL Starter (Monk)]()
* [GraphQL Starter (Sequelize)]()

