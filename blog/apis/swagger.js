require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Blog API',
    description: 'Description'
  },
  host: `localhost: ${process.env.APP_PORT}`
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; // entry point of your express app

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app.js'); // entry point of your express app
});