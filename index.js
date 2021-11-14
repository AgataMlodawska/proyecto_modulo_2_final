let clientes = require("./routes/clientes")
let ventas = require("./routes/ventas")
let listados = require("./routes/listados")
const comics = require("./routes/comics");
const juegoscartas = require("./routes/juegoscartas");
const juegosmesa = require("./routes/juegosmesa");
const snacks = require("./routes/snacks");
const users = require("./routes/users")
const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt")
const app = express();
app.listen(3002)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/clientes', clientes)
app.use('/ventas', ventas)
app.use('/listados', listados)
app.use("/comics", comics);
app.use("/juegoscartas", juegoscartas);
app.use("/juegosmesa", juegosmesa);
app.use("/snacks", snacks);
app.use("/users", users)


let MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
    if (err !== undefined) {
        console.log(err);
    } else {
        app.locals.db = client.db("tienda");
    }
});