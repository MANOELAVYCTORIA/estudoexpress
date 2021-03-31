const { request, response } = require('express');
const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();

app.use(express.json());


const projetos = [];
//console.log(app);

app.get('/projetos', (request, response) => {
    //const {title, owner} = request.query;
    
    return response.json(projetos)
});

app.post('/projetos', (request, response) => {
       const {title, owner} = request.body;

       const projeto = { id: uuidv4(), title, owner};

       projetos.push(projeto);//use push vai jogar a criação do nosso projeto para o array

        return response.json(projeto); // sempre retornar o projeto recem criado e nunca exivir a lista completa
})


app.put('/projetos/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 4',
        'Projeto 45',
    ]);
});

app.delete('/projetos/:id', (request, response) => {
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ]);
});

app.listen(8080);
  