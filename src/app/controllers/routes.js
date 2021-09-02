module.exports = app => {
    app.get('/', (req,res) =>
        res.send("Requisição do tipo get na rota barra")
    )
}