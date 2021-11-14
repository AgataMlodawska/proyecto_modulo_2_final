const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
  let db = request.app.locals.db;
  db.collection("Comics").find().toArray(function (err, datos) {
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
  
  let variabletitulo = req.body.titulo;
  let variablecantidad = req.body.cantidad;
  let variableprecio = req.body.precio;
  let db = req.app.locals.db;

  
  db.collection("Comics").insertOne(
    {
      titulo: variabletitulo,
      cantidad: variablecantidad,
      precio: variableprecio,
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

//modificar en cuanto al titulo
router.put("/", function (req, res) {
  let valorABuscar = req.body.titulo;
  let variablecantidad = req.body.cantidad;
  let variableprecio = req.body.precio;
  let db = req.app.locals.db;

  var newvalues = {
    $set: { cantidad: variablecantidad, precio: variableprecio },
  };
  db.collection("Comics").updateOne(
    {
      titulo: valorABuscar,
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

router.delete('/', function (req, res) {
  let db = req.app.locals.db
  let _id = req.body._id
  console.log(_id)
  db.collection("Comics").find(_id).toArray(function (err, data) {
      if (data.length > 0) {
          console.log(data)
          db.collection("Comics").deleteOne({ _id: _id },
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

module.exports = router;