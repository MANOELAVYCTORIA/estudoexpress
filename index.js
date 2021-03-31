const { request, response } = require('express');
const express = require('express');
const app = express();

//console.log(app);

app.get('/projetos', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ])
});

app.post('/projetos', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
})

app.listen(8080);
  