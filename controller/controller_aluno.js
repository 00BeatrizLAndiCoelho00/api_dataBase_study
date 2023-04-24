/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objective : Cotrol the data betwem api and the database
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 24-04-2023
 * Version: 1.0 
 * _____________________________________________________________________________________________________________________________________________________________*/


//recive app data and send to model
const inserirAluno = function(dadosAluno){

}

//recebe dados do app e encia para atualizar um existente
const atualizarAluno = function(dadosAluno){

}
//exclui dados filtrado pelo id
const deletarAluno = function(id){

}
//aretorna alunos
const selecionarTodosAlunos = async function(){

    // import do arquivo de acesso ao banco de dados 
    let alunoDAO = require('../model/DAO/alunoDAO.js')

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
    selecionarTodosAlunos
}


