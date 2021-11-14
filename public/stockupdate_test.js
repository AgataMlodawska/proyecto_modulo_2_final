//front de update

if (document.getElementById("button9")) { document.getElementById("button9").addEventListener("click", show) }
function show() {

    let cantidad = document.querySelector("input[name='cantidad2']").value;
    let nombreproducto = document.querySelector("input[name='nombreproducto']").value;
    fetch("/productos")
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response)
        })
}
//back de update
router.put('/', function (req, res) {
    let db = req.app.locals.db
    let nuevacantidad = req.body.cantidad
    let nombreproducto2 = req.body.nombreproducto
    console.log(nuevacantidad)
    console.log(nombreproducto2)
    var cantidad2 = { $inc: { cantidad: -nuevacantidad, } }
    console.log(nombreapellido)
    db.collection("Comics").find({ nombreproducto: nombreproducto2 }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("Comics").updateOne({
                nombreproducto: nombreproducto2
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
    db.collection("JuegosMesa").find({ nombreproducto: nombreproducto2 }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("JuegosMesa").updateOne({
                nombreproducto: nombreproducto2
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
    db.collection("JuegosCartas").find({ nombreproducto: nombreproducto2 }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("JuegosCartas").updateOne({
                nombreproducto: nombreproducto2
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
    db.collection("Snacks").find({ nombreproducto: nombreproducto2 }).toArray(function (err, data) {
        if (data.length > 0) {
            console.log(data)
            db.collection("Snacks").updateOne({
                nombreproducto: nombreproducto2
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

})