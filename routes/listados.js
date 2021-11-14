const express = require("express")
const router = express.Router()

router.get('/filtro', function (req, res) {
    let dni_cliente = req.query.dni_cliente
    let db = req.app.locals.db
    console.log(dni_cliente)
    db.collection("Ventas").find({ dni_cliente: dni_cliente }).toArray(function (err, datos) {
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
router.get('/desc', function (req, res) {
    let db = req.app.locals.db
    var mysort = { cantidad: -1 };
    db.collection("Ventas").find().sort(mysort).limit(4).toArray(function (err, datos) {
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
router.get('/asc', function (req, res) {
    let db = req.app.locals.db
    var mysort = { cantidad: 1 };
    db.collection("Ventas").find().sort(mysort).limit(4).toArray(function (err, datos) {
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
router.get('/', function (req, res) {
    let db = req.app.locals.db
    var mysort = { cantidad: -1 };
    db.collection("Ventas").find().sort(mysort).toArray(function (err, datos) {
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
router.get('/test', function (req, res) {
    let db = req.app.locals.db
    var mysort = { cantidad: -1 };
    db.collection("Ventas").aggregate([
        // Stage 1: counting the total number
        {
            $group: {
                _id: "",
                sum: { $sum: "$cantidad" },
                productos: { $push: { nombreproducto: "$nombreproducto", cantidad: "$cantidad" } }
            }
        },
        // Stage 2: generating the documents for each element
        {
            $unwind: {
                path: "$productos",

            }
        },
        // Stage 3: passing the documents to the project
        {
            $project: {
                nombreproducto: "$productos.nombreproducto",
                cantidad: "$productos.cantidad",
                sum: "$sum",
                "percent": { $multiply: [{ $divide: ["$users.votes", "$sum"] }, 100] }
            }
        }
    ]

    ).sort(mysort).toArray(function (err, datos) {
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
module.exports = router;


