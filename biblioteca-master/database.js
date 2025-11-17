const mysql = require('mysql2')
async function conectar(){
    const conexao = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'senai',
        database : 'biblioteca'
    })

    return conexao;
}

exports.module = {conectar}
