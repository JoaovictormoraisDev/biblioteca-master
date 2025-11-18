const express = require('express');
const bp = require('body-parser');
const { listarUsuarios, inserirUsuario } = require('./usuario')
const app = express();

app.use(bp.urlencoded({extended: true }));
app.use(bp.json());

app.get('/', (req, res) => {
    res.send('<h1>Está vivo</h1>')
});

app.get('/usuario', async (req, res) => {
    try {
        const rows = await listarUsuarios();
        res.status(200).json(rows);
    } catch (e) {
        res.status(500).json({
            "erro": e.message
        })
    }
})

app.post('/usuario', (req, res) => {
    try {
        let body = req.body;
        console.log(body);
        inserirUsuario(body);
        res.status(201).send('Usuário inserido');
    } catch (e) {
        res.status(500).json({
            "erro": e.message
        })
    }
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