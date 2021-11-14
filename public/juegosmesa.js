

//JUEGOS MESA
document.querySelector("#mostrarJM").addEventListener("click", function (event) {
    event.preventDefault();
fetch("/JuegosMesa/", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    
}).then(function (response) {
    return response.json()
}).then(function (response) {
    console.log(response)
    for (let i = 0; i < response.length; i++) {
        console.log(response[i])
        document.querySelector("#tabla").innerHTML += `<p>Id de articulo:${response[i]._id}</p>`
        document.querySelector("#tabla").innerHTML += `<p>nombre:${response[i].nombre}</p>`
        document.querySelector("#tabla").innerHTML += `<p>Cantidad:${response[i].cantidad}</p>`
        document.querySelector("#tabla").innerHTML += `<p>Precio:${response[i].precio}</p>`
        }
    })
    });
document.querySelector("#añadirJuegosMesa").addEventListener("click", function (event) {
    event.preventDefault();
    let nombreJM = document.querySelector("input[name='nombreJM']").value;
    let cantidadJM = document.querySelector("input[name='cantidadJM']").value;
    let precioJM = document.querySelector("input[name='precioJM']").value;

    let juegoMesa = {
        nombreJM: nombreJM,
        cantidadJM: cantidadJM,
        precioJM: precioJM
      
    };
    console.log(juegoMesa);
    let body = JSON.stringify(juegooMesa)

    fetch("/JuegosMesa/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res)
    })
});




document.querySelector("#modificarJuegosMesa").addEventListener("click", function (event) {
    
    event.preventDefault();
    let nombreJM = document.querySelector("input[name='nombreJM']").value;
    let cantidadJM = document.querySelector("input[name='cantidadJM']").value;
    let precioJM = document.querySelector("input[name='precioJM']").value;

    let juegosmesa = {
        nombreJM: nombreJM,
        cantidadJM: cantidadJM,
        precioJM: precioJM
      
    };
    console.log(juegosmesa);
    let body = JSON.stringify(juegosmesa)

    fetch("/JuegosMesa/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res)
    })
})