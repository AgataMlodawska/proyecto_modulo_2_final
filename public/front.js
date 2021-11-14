
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
       
        document.querySelector("#tabla").innerHTML += `<p>Id de articulo &nbsp; &nbsp;Titulo&nbsp; &nbsp;Cantidad&nbsp; &nbsp;Precio</p>`
        document.querySelector("#tabla").innerHTML += `${response[i]._id}&nbsp; &nbsp;`
        document.querySelector("#tabla").innerHTML += `${response[i].titulo}&nbsp; &nbsp;`
        document.querySelector("#tabla").innerHTML += `${response[i].cantidad}&nbsp; &nbsp;`
        document.querySelector("#tabla").innerHTML += `${response[i].precio}&nbsp; &nbsp;`
        
       
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
document.querySelector("#eliminarC").addEventListener("click", function (event) {
    event.preventDefault();

    let _id = document.querySelector("input[name='_id']").value;
    console.log(_id)


    let comic = {
        _id: _id

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
        document.querySelector("#tabla").innerHTML += `<hr>`
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

document.querySelector("#eliminarJC").addEventListener("click", function (event) {
    event.preventDefault();

    let _id = document.querySelector("input[name='_idJC']").value;
    console.log(_id)


    let juegosCartas = {
        _id: _id

    };
    console.log(juegosCartas);
    let body = JSON.stringify(juegosCartas)



    fetch("/JuegosCartas", {
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
        document.querySelector("#tabla").innerHTML += `<hr>`
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

document.querySelector("#eliminarJM").addEventListener("click", function (event) {
    event.preventDefault();

    let _id = document.querySelector("input[name='_idJM']").value;
    console.log(_id)


    let JuegosMesa = {
        _id: _id

    };
    console.log(JuegosMesa);
    let body = JSON.stringify(JuegosMesa)



    fetch("/JuegosMesa", {
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
        document.querySelector("#tabla").innerHTML += `<hr>`
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

document.querySelector("#eliminarS").addEventListener("click", function (event) {
    event.preventDefault();

    let _id = document.querySelector("input[name='_idS']").value;
    console.log(_id)


    let Snacks = {
        _id: _id

    };
    console.log(Snacks);
    let body = JSON.stringify(Snacks)



    fetch("/Snacks", {
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