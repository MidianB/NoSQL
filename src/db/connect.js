const mongoose = require('mongoose')

function connect(){
   
    mongoose
    .connect('mongodb://localhost/mimosdasol',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("Conectado com o Banco de Dados - Mimos da Sol")
    }).catch((error)=>{
        console.log(`Erro na conexão ${error}`)

    })
    


}
module.exports=connect()