/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objective : Create an api tahth will alow aacess a database(GET POST DELET PUT)
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 14-04-2023
 * Version: 1.0 
 * _____________________________________________________________________________________________________________________________________________________________*/


//____________________________________________________________________________________________________________________________//

//import biblioteca do prisma
var {PrismaClient} = require('@prisma/client')

//instancia a prisma client 
var prisma = new PrismaClient()

//_________________________________________________________________________________________________________________________//

//insere novo registro no banco de dados 
const insertAluno = async function(dadosAluno){

    //script em sql para inserir os dados no banco de dados 
  let sql = `insert into tbl_aluno (  
                                    nome,
                                    cpf,
                                    rg,
                                    data_nascimento,
                                    email)
                                    values
                                    (
                                     '${dadosAluno.nome}',
                                     '${dadosAluno.cpf}',
                                     '${dadosAluno.rg}',
                                     '${dadosAluno.data_nascimento}',
                                     '${dadosAluno.email}'
                                     )`

 
    //executa o scrit no banco sql e recebemos se o retorno deu certo ou n
    let result = await prisma.$executeRawUnsafe(sql)

    if(result){
        return true

    }
    else{
       return false
    }
}

//_________________________________________________________________________________________________________________________//

//atualiza dados
const updateAluno = function(dadosAluno){

}

//_________________________________________________________________________________________________________________________//
//exclui dados
const deleteAluno = function(id){

}

//_________________________________________________________________________________________________________________________//
//aretorna alunos
const selectAllAluno =  async function(){

    //variavel com script para rodar o db
    let sql = 'select * from tbl_aluno'

    //rawunsafe e ultilizado quando os cript esta em uma variavel e o queryrow e ultilizado quando passar o scipt direto no nmetodo
    // EX : ($queryRaw('select * from  tbl_aluno))

    let result = await prisma.$queryRawUnsafe(sql)
    

    //valida se o banco retornou algum registro
    if(result.length > 0 ){

        
        return result
    }
    else {
        return false
    }

}

//_________________________________________________________________________________________________________________________//
const selectByIdAluno = function(id){

}
//_________________________________________________________________________________________________________________________//
module.exports = {
    selectAllAluno, 
    insertAluno
}
