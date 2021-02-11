const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

//models
require('./src/models/Contato')
const Contato = mongoose.model('contato')

//conexao BD
require('./src/db/connect')

app.get('/contato', async (req,res)=>{
    const contatoResponse = await Contato.find()
    const contatoJson = await contatoResponse

    return res.json(contatoJson)

})

app.post('/contato',async(req,res)=>{
    const novoContato = new Contato
    ({
        nome: req.body.nome,
        email: req.body.email,
        mensagem:req.body.mensagem,

    });

    novoContato.save()

    res.json({mensagem:"Contato feito com sucesso!" , contato:novoContato})
});

app.put('/contato/:id', async(req,res)=>{
    const {id} = req.params
    const contato = await Contato.findOne({_id:id})

    contato.nome=req.body.nome
    contato.email=req.body.email
    contato.mensagem=req.body.mensagem

    contato.save()
    res.json({message:"Contato alterado", contato:contato})
})

app.delete('/contato/:id', async(req,res)=>{
    const {id} = req.params
    const contato = await Contato.findOnAndDelete({_id:id});

    res.json({message:"Contato deletado com sucesso", contato:contato})
})

app.listen(3332);