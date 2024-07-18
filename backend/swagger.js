const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Online Learning System API',
      version: '1.0.0',
      description: 'API documentation for the Online Learning System',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Replace with your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
