const express = require('express');
const app = express();
const db = require('./config/db');
const consign = require('consign');

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db;

app.listen(3000, () => {
    console.log('Backend executando...');
})

/* Exemplo de como funciona os Middlewares */

// const bodyParse = require('body-parser');

// app.use(bodyParse.json());
// app.use(meuJson());

// function meuJson() {
//     return (req, res, next) => {
//         console.log('Antes de tudo: Meu midde]lewere...');
//         next(); // Executa a proxima funcionalidade (middlewares) da cadeia, ou seja, executa o func 0
//     }
// }

// app.post('/blabla;:valor', (req, res, next) => {
//     console.log('Func 0');
//     next();
// })

// app.post('/blabla;:valor', (req, res, next) => {
//     console.log('Func 1');
//     //res.status(200).send('Meu Backend = ' + JSON.stringify(req.body));
//     res.status(200).send('Meu Backend = ' + req.body.dependentes[0].nome);
//     next();
// })

// app.post('/blabla;:valor', (req, res) => {
//     console.log('Func 2');
// })
