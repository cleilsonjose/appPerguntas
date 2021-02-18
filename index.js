const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
//database 

connection.authenticate().then(() => {
  console.log('conexão com o banco de dados feita com sucesso');
}).catch((msgerro) => {
  console.log(msgerro);
})

app.set('view engine', 'ejs');
app.use(express.static('public'));
//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas
app.get('/', (req,res) =>{
  res.render("index")
});

app.get("/perguntar", (req,res) =>{
  res.render("perguntar");
});

app.post("/salvarpergunta", (req,res) =>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send("formulario! titulo = " + titulo + " " +" descricao " + descricao);
})

app.listen(8080,() =>{
  console.log("App rodando!!");
})