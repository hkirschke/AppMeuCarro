const express = require('express');
const app = express();

app.listen(3000, () => 
    console.log("Servidor ouvindo a porta 3000")
);

app.get('/', (req,res) =>
    res.send("Requisição do tipo get na rota barra")
)