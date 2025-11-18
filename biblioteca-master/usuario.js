const conectar = require('./database')

async function listarUsuarios(){
    try{
        const conexao = await conectar();
        const [rows] = await conexao.execute(`select * from usuario`)
        return rows;
    } catch (e) {
        throw new Error(`Aconteceu um erro inesperado durante a coleta de dados de usuários no banco de dados. \n \n ${e.message}`)
    }
}

async function inserirUsuario(data){
    try{
        const { nome, tipouser, email, telefone } = data;
        const conexao = await conectar();
        const resultado = conexao.execute(`insert into usuario (nome, tipouser, email, telefone) values (?,?,?,?)`, [nome, tipouser, email, telefone])
        return
    } catch (e) {
       throw new Error(`Aconteceu um erro inesperado durante a inserção de um novo usuário no banco de dados. \n \n ${e.message}`)
    }    
}

module.exports = {listarUsuarios, inserirUsuario}