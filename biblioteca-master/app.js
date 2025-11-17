const express = require('express');
const listarUsuarios = require('./usuario')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Está vivo</h1>')
});

app.get('/usuario', (req, res) => {
    const [rows] = await listarUsuarios();
    res.send('Listagem de usuários')
})

app.post('/usuario', (req, res) => {
    res.send('Adicionar novo usuário')
})

app.put('/usuario', (req, res) => {
    res.send('Atualizar usuário existente')
})

app.delete('/usuario', (req, res) => {
    res.send('Deletar usuário')
})

app.listen(3000);
