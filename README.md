# Profile Viewer

## Requirements

* [Node.js](https://nodejs.org/)
* [Express.js](http://expressjs.com)
* A `.env` file must be created in the root of this project with the following keys and their corresponding values in order to make it work:

```sh
MYSQL_TABLE
MYSQL_HOST
MYSQL_PORT
MYSQL_DATABASE
MYSQL_USER
MYSQL_PASS
TWITTER_KEY
TWITTER_SECRET
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET
```

## Executtion

First, install all the needed dependencies

```sh
npm i
```

Then run the application:

```sh
npm run start
```

To access the application, open a browser and visit `localhost:3000`.

## Tests

To run the tests, execute the following command:

```sh
npm run test
```
