
/*let comics = []
fetch("http://localhost:3000/comics")
    .then(function (response) {
        return response.json();

    })
    .then(function (response) {
        
        for (let i = 0; i < response.length; i++) {
            console.log(response[i])
            document.querySelector("body").innerHTML += `<p>Id de compra:${response[i]._id}</p>`
            document.querySelector("body").innerHTML += `<p>dni_cliente:${response[i].titulo}</p>`
            document.querySelector("body").innerHTML += `<p>IdVenta:${response[i].cantidad}</p>`
            document.querySelector("body").innerHTML += `<p>IdProducto:${response[i].precio}</p>`
            }
    });
        
        if (document.getElementById("mostrar")) { document.getElementById("mostrar").addEventListener("click", show) }
        function show() {
            let firstrow = document.createElement("tr")
            let firstcolumn = document.createElement("th")
            let secondcolumn = document.createElement("th")
            let thirdcolumn = document.createElement("th")
            let fourthcolumn = document.createElement("th")
            let comics1 = document.querySelector("#comics1")
            firstcolumn.innerText = "Id"
            secondcolumn.innerText = "Titulo"
            thirdcolumn.innerText = "Cantidad"
            fourthcolumn.innerText = "Precio"
            comics1.appendChild(firstrow)
            firstrow.appendChild(firstcolumn)
            firstrow.appendChild(secondcolumn)
            firstrow.appendChild(thirdcolumn)
            firstrow.appendChild(fourthcolumn)

            for (i = 0; i < comics.length; i++) {

                let id = comics[i]._id

                let titulo = comics[i].titulo

                let cantidad = comics[i].cantidad

                let precio = comics[i].precio


                let id1;
                let titulo1;
                let cantidad1;
                let precio1;
                let row
                row = document.createElement("tr")
                id1 = document.createElement("td");
                id1.id = "query"
                titulo1 = document.createElement("td")
                titulo1.id = "titulo"
                cantidad1 = document.createElement("td")
                cantidad1.id = "cantidad"
                precio1 = document.createElement("td")
                precio1.id = "precio"
                id1.innerText = id
                titulo.innerText = titulo
                cantidad1.innerText = cantidad
                precio1.innerText = precio

                comics1.appendChild(row)
                row.appendChild(id1);
                row.appendChild(titulo1);
                row.appendChild(cantidad1)
                row.appendChild(precio1)




            }
        }
    })
*/

//COMICS
document.querySelector("#mostrarC").addEventListener("click", function (event) {
    event.preventDefault();
fetch("/Comics/", {
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
        document.querySelector("#tabla").innerHTML += `<p>titulo:${response[i].titulo}</p>`
        document.querySelector("#tabla").innerHTML += `<p>Cantidad:${response[i].cantidad}</p>`
        document.querySelector("#tabla").innerHTML += `<p>Precio:${response[i].precio}</p>`
        }
    })
    });
document.querySelector("#añadirC").addEventListener("click", function (event) {
    event.preventDefault();
    let tituloC = document.querySelector("input[name='titulo']").value;
    let cantidadC = document.querySelector("input[name='cantidad']").value;
    let precioC = document.querySelector("input[name='precio']").value;

    let comics = {
        titulo: tituloC,
        cantidad: cantidadC,
        precio: precioC
      
    };
    console.log(comics);
    let body = JSON.stringify(comics)

    fetch("/Comics/", {
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

document.querySelector("#modificarC").addEventListener("click", function (event) {
    
    let tituloC = document.querySelector("input[name='titulo']").value;
    let cantidadC = document.querySelector("input[name='cantidad']").value;
    let precioC = document.querySelector("input[name='precio']").value;

    let comics = {
        titulo: tituloC,
        cantidad: cantidadC,
        precio: precioC
      
    };
    console.log(comics);
    let body = JSON.stringify(comics)

    fetch("/Comics/", {
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
