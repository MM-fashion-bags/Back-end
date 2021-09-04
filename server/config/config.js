//<---------------Puerto------------------>
process.env.PORT = process.env.PORT || 3000

//<-----------Vencimiento del token---------->
process.env.CADUCIDAD_TOKEN = '48h'

//<-----------SEED de autenticacion
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';

//<----------Entorno de desarrollo--------->
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

let urlDB = ""
if(process.env.NODE_ENV === 'dev'){
    urlDB = "mongodb://localhost:27017/BackEnd-Empresa"
}else{
    urlDB = "la conexion debe de ser con mongo atlas u otro tipo de conexion con Mongo"
}

process.env.URLBD = urlDB


