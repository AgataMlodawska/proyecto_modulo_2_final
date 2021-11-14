const express = require("express")
const router = express.Router()


router.get('/', function (req, res) {
    let db = req.app.locals.db
    db.collection("Clientes").find().toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: "error" + err });
        }
        else {
            console.log(datos)
            res.send(datos)

        }
    })

});
router.get('/dni', function (req, res) {
    let dni = req.query.dni
    let db = req.app.locals.db
    console.log(dni)
    db.collection("Clientes").find({ dni: dni }).toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: "error" + err });
        }
        else {
            console.log(datos)
            res.send(datos)
        }
    })
});

router.post('/', function (req, res) {
    let db = req.app.locals.db
    let newdni = req.body.dni
    let newnombre = req.body.nombre
    let newapellido = req.body.apellido
    let newemail = req.body.email
    //db.collection("Clientes").find({ dni: newdni }).toArray(function (err, data) {
    //  if (data.length > 0) {
    //   console.log(data)
    db.collection("Clientes").insertOne({
        dni: newdni,
        nombre: newnombre,
        apellidos: newapellido,
        email: newemail
    },
        function (err, respuesta) {
            if (err !== undefined) {
                console.log(err),
                    res.send({ mensaje: "Ha habido un error. " + err });
            } else {
                console.log(respuesta);
                console.log("Modificado correctamente");


            }
        });
}
); //quitar si cambia la funcion
//})
//})
router.put('/', function (req, res) {
    let db = req.app.locals.db
    let newdni = req.body.dni
    let newnombre = req.body.nombre
    let newapellido = req.body.apellidos
    let newemail = req.body.email
    console.log(newdni)
    var nombreapellidoemail = { $set: { nombre: newnombre, apellidos: newapellido, email: newemail } }
    console.log(nombreapellidoemail)
    db.collection("Clientes").find({ dni: newdni }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("Clientes").updateMany({
                dni: newdni
            }, nombreapellidoemail,
                function (err, respuesta) {
                    if (err !== undefined) {
                        console.log(err), res.send({ mensaje: "Ha habido un error. " + err });
                    } else {
                        console.log(respuesta);
                        console.log("Modificado correctamente");
                        res.send(respuesta)

                    }
                })


        }

    })
})
router.delete('/', function (req, res) {
    let db = req.app.locals.db
    let newdni = req.body.dni
    console.log(newdni)
    db.collection("Clientes").find({ dni: newdni }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("Clientes").deleteOne({ dni: newdni },
                function (err, respuesta) {
                    if (err !== undefined) {
                        console.log(err), res.send({ mensaje: "Ha habido un error. " + err });
                    } else {
                        console.log(respuesta);
                        console.log("Modificado correctamente");
                        res.send(respuesta)
                    }
                })


        }

    })
})


module.exports = router

