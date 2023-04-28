


 //____________________________________________________erro___________________________________________________________________________//

const ERRO_REQUIRED_DATA = {status: 400 , message: 'Existem dados enviados obrigatorios que nao foram preenchidos !'}


const ERRO_INTERNAL_SERVER = {status: 500 , message: 'erro processamento no banco de dados'}

 //____________________________________________________SUCESSO___________________________________________________________________________//

const  MESSAGE_CREATED_ITEM = {status: 201, message: 'item construido com sucesso'}

 module.exports ={
    ERRO_REQUIRED_DATA,
    ERRO_INTERNAL_SERVER,
    MESSAGE_CREATED_ITEM
 }