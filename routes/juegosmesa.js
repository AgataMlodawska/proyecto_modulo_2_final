const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
  let db = request.app.locals.db;
  db.collection("JuegosMesa").find().toArray(function (err, datos) {
      if (err != undefined) {
        console.log(err);
        response.send({ mensaje: "error: " + err });
      } else {
        console.log(datos);
        response.send(datos);
      }
    });
});

router.post("/", function (req, res) {
  
  let variablenombreJM = req.body.nombreJM;
  let variablecantidadJM = req.body.cantidadJM;
  let variableprecioJM = req.body.precioJM;
  let db = req.app.locals.db;

  
  db.collection("JuegosMesa").insertOne(
    {
      nombreJM: variablenombreJM,
      cantidadJM: variablecantidadJM,
      precioJM: variableprecioJM,
    },
    function (err, respuesta) {
      if (err !== undefined) {
        console.log(err), res.send({ mensaje: "Ha habido un error. " + err });
      } else {
        console.log(respuesta);
        console.log("Introducido correctamente");
      }
    
  });
});

router.put("/", function (req, res) {
  let valorABuscar = req.body.nombreJM;
  let variablecantidadJM = req.body.cantidadJM;
  let variableprecioJM = req.body.precioJM;
  let db = req.app.locals.db;

  var newvalues = {
    $set: { cantidad: variablecantidadJM, precio: variableprecioJM },
  };
  db.collection("JuegosMesa").updateOne(
    {
      nombre: valorABuscar,
    },
    newvalues,
    function (err, respuesta) {
      if (err !== undefined) {
        console.log(err), res.send({ mensaje: "Ha habido un error. " + err });
      } else {
        console.log(respuesta);
        console.log("Modificado correctamente");
      }
    }
  );
});

module.exports = router;