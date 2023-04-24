/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objective : Create an api tahth will alow aacess a database(GET POST DELET PUT)
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 14-04-2023
 * Version: 1.0 
 * _____________________________________________________________________________________________________________________________________________________________//
 * 
 *  Express - permite a integraçao entre http com o codigo 
 * npm install express --save
 * 
 * Cors - Tambem usa-se o cors (um gerenciador de permissoes para o protocolo htttp 
 * npm instal cors --save)
 * 
 * Body-paser  - è uma dependencia que permite manipular dados enviados pela requisicap
 * npm install body-parser --save
 *  _________________________________________________________________________________________________________________________________________________________________*/


//______________________________________________________INSTALACAO PRISMA (QUE ME PERMITE ACESSAR O BANCO DE DADOS)_______________________________________________________//


    //npm install prisma --save
    //npx prisma
    //npm prisma init
    //npm install @prisma/cliente


//__________________________________________IMPORT DAS DEPENDENCIAS_______________________________________________________________________________________________________//

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request } = require('http')
const { response } = require('express')

//____________________________________________CRIA O IBJETO_______________________________________________________________________________________________________

const app = express()

//configura as permissoes do cors

app.use((request,response, next)=>{
    response.header('Acess-Control-Allow_Origin','*')
    response.header('Acess-Control-Allow_Methods','GET, POST, PUT, DELETE,OPTIONS')

    app.use(cors())

    next()
})

//______________________________________________________ENDPOINTS BANCO DE DADOS________________________________________________________________________________________________// 

/*CRUD 
      CREATE
      READ
      UPDATE
      DELETE
*/



    //retorna todos os dados de alunos
    app.get('/v1/lion-school/alunos',cors(),async function(request,response){

        let controllerAluno = require('./controller/controller_aluno.js')

        let dados = await controllerAluno.selecionarTodosAlunos()

        if(dados){
            response.json(dados)
            response.status(200)
        }
        else{
            response.json()
            response.status(404)
        }

    })

    //retorna dados do aluno pelo id
    app.get('/v1/lion-school/aluno/:id',cors(),async function(request,response){


    })

    //Insere um novo aluno
    app.post('/v1/lion-school/aluno/',cors(),async function(request,response){


    })

    //atualiza um aluno pelo id
    app.put('/v1/lion-school/aluno/:id',cors(),async function(request,response){


    })


    //exclui um aluno pelo id
    app.delete('/v1/lion-school/aluno/:id',cors(),async function(request,response){


    })
//_________________________________________________________________________________________________________________________________________________________________//

app.listen(8080,function(){
    console.log("server aguardando requisicoes ");
})