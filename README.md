## Space tourism API

Space tourism API is Rest Api to get information about space tours

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)

#

### Prerequisites

- <img src="./readme/nodejs.png" width="25" style="top: 8px" /> _Node JS @18.X and up_
- <img src="./readme/npm.png" width="25" style="top: 8px" /> _npm @9 and up_

#

### Tech Stack

- <img src="./readme/npm.png" width="25" style="top: 8px" /> _body-parser @ 1.20.0 - Node.js body parsing middleware_
- <img src="./readme/dotenv.png" width="25" style="top: 8px" /> _dotenv @ 16.1.3 - zero-dependency module that loads environment variables from a .env file_
- <img src="./readme/express.png" width="25" style="top: 8px" /> _express @ 4.18.2 - web framework for node_
  validator for JavaScript\_
- <img src="./readme/mongoDB.png" width="25" style="top: 8px" /> _mongodb @ 5.6.0 - document database_
- <img src="./readme/mongoose.png" width="25" style="top: 8px" /> _mongoose @ 7.2.2 - MongoDB object modeling tool_
- <img src="./readme/Swagger-logo.png" width="25" style="top: 8px" /> _swagger @ 4.6.3 - module provides tools for designing and building Swagger-compliant APIs entirely in Node.js_
- <img src="./readme/mongoose.png" width="25" style="top: 8px" /> _yaml @ 0.3.0 - yaml is a definitive library for YAML, the human friendly data serialization standard_

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/tchkoidze/space-tourism-api.git
```

2. Next step requires install all the dependencies.

```
npm install
```

4. To create your own database, need to create new local connection, host would be localhost.
   also you need to replace variables values in .env file, or you can generate mongo atlas url with user and password

#

### Project Structure

```
|--- src
|   |--- config # configuration files
|   |---|--- mongo.ts # perform mongoDb connection
|   |---|--- swagger.yaml # swagger configuration file
|   |--- controllers # functions for routes
|   |--- middlewares # extra helper middleware functions
|   |---|--- swagger-middleware.js # function to build and serve swagger
|   |--- models # mongoose models for mongoDb
|   |--- routes # project routes
|   |--- schemas # schema files
|   |--- app.js # main file
- package.json # dependency manager configurations
```
