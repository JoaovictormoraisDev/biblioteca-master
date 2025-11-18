const express = require('express');
const { listarUsuarios, AdicionarUsuario, AtualizarUsuario, DeletarUsuario } = require('./usuario');
const bp = require('body-parser');
const app = express();

app.use(bp.urlencoded({extended: true}))
app.use(bp.json());


app.get('/', (req, res) => {
    res.send('<h1>Está vivo</h1>')
});

app.get('/usuario', async (req, res) => {
    try {
        const [rows] = await listarUsuarios();
        res.status(200).send(`listagem de usuarios \n ${JSON.stringify(rows)}` );
    } catch (error) {
       res.status(500).json({
        'erro': error.message
       })
    }
})

app.post('/usuario', async (req, res) => {
  try{
    let body = req.body;
    console.log(body)
    AdicionarUsuario(body);
    res.status(201).send('usuarior cadastrado com sucesso')
  }catch(error){
    res.status(500).json({
        "erro": error.message
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
