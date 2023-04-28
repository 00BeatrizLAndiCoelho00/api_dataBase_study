/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objective : Cotrol the data betwem api and the database
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 24-04-2023
 * Version: 1.0 
 * _____________________________________________________________________________________________________________________________________________________________*/


    // import do arquivo de acesso ao banco de dados 
    var alunoDAO = require('../model/DAO/alunoDAO.js')
//______________________________________________________________________________________________________________________________________
//recive app data and send to model
const inserirAluno = async function(dadosAluno){

   let message = require('./modulo/config.js')

   if(dadosAluno.nome == ''            || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
      dadosAluno.cpf == ''             || dadosAluno.cpf == undefined  || dadosAluno.cpf.length > 18   ||
      dadosAluno.rg == ''              || dadosAluno.rg == undefined   || dadosAluno.rg.length > 15    ||
      dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined                      ||
      dadosAluno.email ==''            || dadosAluno.email == undefined || dadosAluno.email.length > 250
      ){
         message.ERRO_REQUIRED_DATA
      }
      else{
         let status =  await alunoDAO.insertAluno(dadosAluno)
         console.log(status)

         if(status){
            return message.MESSAGE_CREATED_ITEM
         }
         else{
            return message.ERRO_INTERNAL_SERVER
         }
         
      }
     
}

//recebe dados do app e encia para atualizar um existente
const atualizarAluno = function(dadosAluno){

}
//exclui dados filtrado pelo id
const deletarAluno = function(id){

}
//aretorna alunos
const selecionarTodosAlunos = async function(){

    let dadosAluno = await alunoDAO.selectAllAluno()

    //cria um json de aluno
    let dadosJSON = {}
    // da atributos aluno para o json e add os dados alun ao atributo
    dadosJSON.alunos = dadosAluno

     if(dadosAluno){
        return dadosJSON

     }
     else{
        return false
     }
}

//busca um item filtrando pelo id 
const buscarIdAluno = function(id){

}

module.exports ={
    selecionarTodosAlunos, inserirAluno
}


