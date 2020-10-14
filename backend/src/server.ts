import express from 'express';

const app = express();


//rota= Conjunto
//Recurso=usuario
//Metodo http= GET, POST, PUT, Delete 

//GET busca informacao
//POST cria informacao
//PUT Edita Infomacao
//Delete informacao
//Parametro


app.post('/users', (request, response) => {
  console.log(request.query);

  
  return response.json({ message: 'Hello World' });
  //console.log('teste');
});


app.listen(3333);
// localhost:3333

