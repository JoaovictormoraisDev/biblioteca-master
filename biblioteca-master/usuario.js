const { conectar } = require('./database')

async function listarUsuarios(){
    let conexao;
    try {
        conexao = await conectar();
        const [rows] = await conexao.execute(`select * from usuario`);
        return rows;
    } catch (error) {
        console.error("Erro ao listar usuários no banco de dados:", error);
        throw error;
    }
}

async function AdicionarUsuario(data){
    try{
const {nome, tipouser, email, telefone} = data;
const conexao = await conectar()
const [resultado] = await conexao.execute ('INSERT INTO usuario (nome, tipouser, email, telefone) values (?, ?, ?, ?);' [nome, tipouser, email, telefone])
    }catch(e){
        throw new error (`aconteceu um erro ao inserir o novo usuario no banco de dados \n\n ${e.message}`)

    }
}

async function AtualizarUsuario(id, usuario){
    const { nome, email, senha } = usuario;
    let conexao;
    try {
        conexao = await conectar();
        const sql = 'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?;';
        const valores = [nome, email, senha, id];
        await conexao.execute(sql, valores);
    } catch (error) {
        console.error("Erro ao atualizar usuário no banco de dados:", error);
        throw error;
    }
}

async function DeletarUsuario(id){
   
}

module.exports = {
    listarUsuarios,
    AdicionarUsuario,
    AtualizarUsuario,
    DeletarUsuario
}