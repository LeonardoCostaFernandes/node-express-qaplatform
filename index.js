const express = require("express");
const app = express();

// Instrução para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/:nome/:lang",function(req,res){
    //res.send("<h1>Bem vindo à plataforma de Perguntas e Respostas</h1>");
    //res.render("index");
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos",preco: 3.14},
        {nome: "Coca-cola",preco:5},
        {nome: "Leite",preco:1.45},
        {nome: "Carne", preco:15},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4}
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "FLAG",
        inscritos: 8040,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080,()=>{console.log("Servidor ativo!");});