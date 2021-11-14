const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
  let db = request.app.locals.db;
  db.collection("Snacks").find().toArray(function (err, datos) {
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
  
  let variablenombreS = req.body.nombreS;
  let variablecantidadS = req.body.cantidadS;
  let variableprecioS = req.body.precioS;
  let db = req.app.locals.db;

  
  db.collection("Snacks").insertOne(
    {
      nombreS: variablenombreS,
      cantidadS: variablecantidadS,
      precioS: variableprecioS,
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
  let valorABuscar = req.body.nombreS;
  let variablecantidadS = req.body.cantidadS;
  let variableprecioS = req.body.precioS;
  let db = req.app.locals.db;

  var newvalues = {
    $set: { cantidad: variablecantidadS, precio: variableprecioS },
  };
  db.collection("Snacks").updateOne(
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
  let newNombre = req.body.nombre
  console.log(newNombre)
  db.collection("Snacks").find({ nombre: newNombre }).toArray(function (err, data) {
      if (data.length > 0) {
          console.log(data)
          db.collection("Snacks").deleteOne({ nombre: newNombre },
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
  let new_id = req.body._idS
  console.log(new_id)
  db.collection("Snacks").find({_id: new_id}).toArray(function (err, data) {
      if (data.length > 0) {
          console.log(data)
          db.collection("Snacks").deleteOne({ _id: new_id },
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