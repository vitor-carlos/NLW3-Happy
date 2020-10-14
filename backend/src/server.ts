import express from 'express';


import'./database/connection'

const app = express();

app.use(express.json());


app.get('/users/:id', (request, response) => {

  return response.json({ message: 'Hello World' });
  //console.log('teste');
});

app.listen(3333);
// localhost:3333


