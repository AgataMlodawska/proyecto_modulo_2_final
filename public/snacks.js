
//SNACKS
document.querySelector("#mostrarS").addEventListener("click", function (event) {
    event.preventDefault();
fetch("/Snacks/", {
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
document.querySelector("#añadirS").addEventListener("click", function (event) {
    event.preventDefault();
    let nombreS = document.querySelector("input[name='nombreS']").value;
    let cantidadS = document.querySelector("input[name='cantidadS']").value;
    let precioS = document.querySelector("input[name='precioS']").value;

    let snacks = {
        nombreS: nombreS,
        cantidadS: cantidadS,
        precioS: precioS
      
    };
    console.log(snacks);
    let body = JSON.stringify(snacks)

    fetch("/Snacks/", {
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


document.querySelector("#modificarSnack").addEventListener("click", function (event) {
    
    event.preventDefault();
    let nombreS = document.querySelector("input[name='nombreS']").value;
    let cantidadS = document.querySelector("input[name='cantidadS']").value;
    let precioS = document.querySelector("input[name='precioS']").value;

    let snacks = {
        nombreS: nombreS,
        cantidadS: cantidadS,
        precioS: precioS
      
    };
    console.log(snacks);
    let body = JSON.stringify(snacks)

    fetch("/Snacks/", {
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



document.querySelector("#eliminarC").addEventListener("click", function (event) {
    event.preventDefault();

    let id = document.querySelector("input[name='id']").value;
    console.log(id)


    let comic = {
        id: id

    };
    console.log(comic);
    let body = JSON.stringify(comic)



    fetch("/Comics", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: body,
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res)
    }
    )
})