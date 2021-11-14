const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
  let db = request.app.locals.db;
  db.collection("JuegosCartas").find().toArray(function (err, datos) {
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
  
  let variablenombreJC = req.body.nombreJC;
  let variablecantidadJC = req.body.cantidadJC;
  let variableprecioJC = req.body.precioJC;
  let db = req.app.locals.db;

  
  db.collection("JuegosCartas").insertOne(
    {
      nombreJC: variablenombreJC,
      cantidadJC: variablecantidadJC,
      precioJC: variableprecioJC,
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
  let valorABuscar = req.body.nombreJC;
  let variablecantidadJC = req.body.cantidadJC;
  let variableprecioJC = req.body.precioJC;
  let db = req.app.locals.db;

  var newvalues = {
    $set: { cantidad: variablecantidadJC, precio: variableprecioJC },
  };
  db.collection("JuegosCartas").updateOne(
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


router.delete('/', function (req, res) {
  let db = req.app.locals.db
  let new_id = req.body._idJC
  console.log(new_id)
  db.collection("JuegosCartas").find({_id: new_id}).toArray(function (err, data) {
      if (data.length > 0) {
          console.log(data)
          db.collection("JuegosCartas").deleteOne({ _id: new_id },
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