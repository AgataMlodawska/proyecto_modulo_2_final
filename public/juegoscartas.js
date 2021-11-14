

//JUEGOS CARTAS
document.querySelector("#mostrarJC").addEventListener("click", function (event) {
    event.preventDefault();
    fetch("/JuegosCartas/", {
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

document.querySelector("#añadirJuegosCartas").addEventListener("click", function (event) {
    event.preventDefault();
    let nombreJC = document.querySelector("input[name='nombreJC']").value;
    let cantidadJC = document.querySelector("input[name='cantidadJC']").value;
    let precioJC = document.querySelector("input[name='precioJC']").value;

    let juegosCartas = {
        nombreJC: nombreJC,
        cantidadJC: cantidadJC,
        precioJC: precioJC

    };
    console.log(juegosCartas);
    let body = JSON.stringify(juegosCartas)

    fetch("/JuegosCartas/", {
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



document.querySelector("#modificarJuegosCartas").addEventListener("click", function (event) {

    event.preventDefault();
    let nombreJC = document.querySelector("input[name='nombreJC']").value;
    let cantidadJC = document.querySelector("input[name='cantidadJC']").value;
    let precioJC = document.querySelector("input[name='precioJC']").value;

    let juegosCartas = {
        nombreJC: nombreJC,
        cantidadJC: cantidadJC,
        precioJC: precioJC

    };
    console.log(juegosCartas);
    let body = JSON.stringify(juegosCartas)

    fetch("/JuegosCartas/", {
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