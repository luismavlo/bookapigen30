const express = require('express')
const {autorsRouter} = require("./routes/autors.route");

const app = express();

app.use(express.json());


//rutas
app.use('/api/v1/autors', autorsRouter)

module.exports = app;