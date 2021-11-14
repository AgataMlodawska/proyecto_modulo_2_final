const express = require("express")
const router = express.Router()

router.get('/', function (req, res) {

    let db = req.app.locals.db
    db.collection("Ventas").find().toArray(function (err, datos) {
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
router.post("/", function (req, res) {
    let valordni_cliente = req.body.dni_cliente;
    let valorIdVenta = req.body.IdVenta;
    let valoridProducto = req.body.idProducto;
    let valornombreproducto = req.body.nombreproducto;
    let valorcantidad = parseInt(req.body.cantidad);
    let valorimporte = req.body.importe;
    let valorcategoria = req.body.categoria
    let db = req.app.locals.db
    db.collection('Ventas').insertOne({
        dni_cliente: valordni_cliente,
        IdVenta: valorIdVenta,
        idProducto: valoridProducto,
        nombreproducto: valornombreproducto,
        cantidad: valorcantidad,
        importe: valorimporte,
        categoria: valorcategoria
    }, function (err, respuesta) {
        if (err !== undefined) {
            console.log(err),
                res.send({ mensaje: 'Ha habido un error. ' + err });
        } else {
            console.log(respuesta)
            console.log("Introducido correctamente")
        }
    })
    var cantidad2 = { $inc: { cantidad: -valorcantidad, } }
    db.collection("Comics").find({ titulo: valornombreproducto }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("Comics").updateOne({
                titulo: valornombreproducto
            }, cantidad2,
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
    db.collection("JuegosMesa").find({ nombreo: valornombreproducto }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("JuegosMesa").updateOne({
                nombreo: valornombreproducto
            }, cantidad2,
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
    db.collection("JuegosCartas").find({ nombre: valornombreproducto }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("JuegosCartas").updateOne({
                nombreo: valornombreproducto
            }, cantidad2,
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
    db.collection("Snacks").find({ nombreo: valornombreproducto }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("Snacks").updateOne({
                nombreo: valornombreproducto
            }, cantidad2,
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

        ;
});

//router.put('/', function (req, res) {
//  let db = req.app.locals.db
// let nuevacantidad = req.body.cantidad
// let nombreproducto2 = req.body.nombreproducto
// console.log(nuevacantidad)
// console.log(nombreproducto2)


module.exports = router