const { conectar } = require('./database')

async function listarUsuarios(){
    const conexao = await conectar();
    const [rows] = await conexao.execute(`select * from usuario`)
    return rows;
}

module.exports = {listarUsuarios}