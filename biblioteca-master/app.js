const express = require('express');
const { listarUsuarios } = require('./usuario')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Está vivo</h1>')
});

app.get('/usuario', async (req, res) => {
    try {
        const usuarios = await listarUsuarios();
        res.json(usuarios);
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        res.status(500).send('Erro ao buscar usuários no servidor.');
    }
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

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
