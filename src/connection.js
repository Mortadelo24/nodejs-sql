const mysql = require('mysql')
const {mysql_database} = require('./config')

const connection = mysql.createConnection(mysql_database)

connection.connect((err, conn)=>{
    if(err){
        console.log('ocurio un herror en db')

    }else{
        console.log('Modulo sql iniciado')
        return conn
    }

})


module.exports = connection