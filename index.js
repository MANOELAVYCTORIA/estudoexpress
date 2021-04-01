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
    const { id } = request.params;
    const {title, owner} = request.body;
    
    //aqui isamos o fundIndex para percorrer todo o array atrás do id
    //findIndex vai percorrer todos os projetos, e toda vez ele percorrer na variavel project
    // caso ela encontre e retorne true, ela vai retornar o id que estou passando (projeto => projeto.id === id)
    const projetoIndex = projetos.findIndex(projeto => projeto.id === id);

    if(projetoIndex < 0){
        return response.status(400).json({ error: 'Projeto não foi encontrado'});
    }


    const projeto = {
        id,
        title,
        owner,
    }

    projetos[projetoIndex] = projeto;

    return response.json(projeto);
});

app.delete('/projetos/:id', (request, response) => {
    const { id } = request.params

    const projetoIndex = projetos.findIndex(projeto => projeto.id === id);

    if(projetoIndex < 0){
        return response.status(400).json({ error: 'Projeto não foi encontrado'});
    }

    projetos.splice(projetoIndex, 1);

    return response.status(204).send();
});

app.listen(8080);
  