const app = require("express")
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

router.post("/registro", function (req, res) {
    let db = req.app.locals.db
    let username = req.body.username;
    let password = req.body.password;
    let contraseinaCifrada = bcrypt.hashSync(password, 10);
    db.collection("Users")
        .find({ username: username })
        .toArray(function (err, arrayUsuario) {
            if (err !== undefined) {
                res.send({ mensaje: "Ha habido un error" });
            } else {
                if (arrayUsuario.length == 0) {
                    db.collection("Users").insertOne({ username: username, password: contraseinaCifrada }, function (err, result) {
                        if (err !== undefined) {
                            res.send({ mensaje: "Error al registrar el usuario" })
                        } else {
                            res.send({ mensaje: "Usuario registrado correctamente" })
                        }
                    })
                } else {
                    res.send({ mensaje: "El usuario ya estaba registrado" })
                }
            }
        })
})
router.post("/login", function (req, res) {
    let db = req.app.locals.db
    let username = req.body.username;
    let password = req.body.password;

    db.collection("Users")
        .find({ username: username })
        .toArray(function (err, arrayUsuario) {
            if (err !== undefined) {
                res.send({ mensaje: "Ha habido un error" });
            } else {
                if (arrayUsuario.length > 0) {
                    if (bcrypt.compareSync(password, arrayUsuario[0].password)) {
                        res.send({ mensaje: "Logueado correctamente" });
                    } else {
                        res.send({ mensaje: "Contraseña incorrecta" });
                    }
                } else {
                    res.send({ mensaje: "El usuario no existe" });
                }
            }
        });
});


module.exports = router