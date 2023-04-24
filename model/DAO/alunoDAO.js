/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objective : Create an api tahth will alow aacess a database(GET POST DELET PUT)
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 14-04-2023
 * Version: 1.0 
 * _____________________________________________________________________________________________________________________________________________________________*/


//insere novo registro no banco de dados 
const insertAluno = function(dadosAluno){

}
//atualiza dados
const updateAluno = function(dadosAluno){

}
//exclui dados
const deleteAluno = function(id){

}
//aretorna alunos
const selectAllAluno =  async function(){

    //import biblioteca do prisma
let {PrismaClient} = require('@prisma/client')

//instancia a prisma client 
let prisma = new PrismaClient()

//variavel com script para rodar o db
let sql = 'select * from tbl_aluno'

//rawunsafe e ultilizado quando os cript esta em uma variavel e o queryrow e ultilizado quando passar o scipt direto no nmetodo
// EX : ($queryRaw('select * from  tbl_aluno))

let rsAluno = await prisma.$queryRawUnsafe(sql)

//valida se o banco retornou algum registro
if(rsAluno.length > 0 ){

    return rsAluno
}
else {
    return false
}


}

const selectByIdAluno = function(id){

}

module.exports = {
    selectAllAluno
}
