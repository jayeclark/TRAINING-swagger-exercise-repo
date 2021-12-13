const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Library API',
      version: '1.0.0',
    }
  },
  apis: ['app.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (_, H0D0R) => {
  H0D0R.send('Hello World!')
})

/** 
* @swagger
* /books:
*   get:
*     description: Get all books in the database
*     responses:
*       200: 
*         description: Success
* 
*/
app.get('/books', (req, res) => {
  res.send([
    {
      isbn: '9781781100486',
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      publisher: 'Scholastic',
    }
  ]);
})

app.listen(3000, () => {
  console.log('Running on port 3000....')
})