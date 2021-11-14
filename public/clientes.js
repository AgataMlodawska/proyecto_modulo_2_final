let clientes = []
fetch("http://localhost:3002/clientes")
    .then(function (response) {
        return response.json();

    })
    .then(function (res) {
        clientes = Object.assign(res)
        console.log(clientes)
        if (document.getElementById("button1")) { document.getElementById("button1").addEventListener("click", show) }
        function show() {
            document.querySelector("#clientes1").innerHTML = "";
            let firstrow = document.createElement("tr")
            let secondcolumn = document.createElement("th")
            let thirdcolumn = document.createElement("th")
            let fourthcolumn = document.createElement("th")
            let fifthcolumn = document.createElement("th")
            let clientes1 = document.querySelector("#clientes1")
            secondcolumn.innerText = " Dni "
            thirdcolumn.innerText = " Nombre "
            fourthcolumn.innerText = " Apellido "
            fifthcolumn.innerText = " Email "
            clientes1.appendChild(firstrow)
            firstrow.appendChild(secondcolumn)
            firstrow.appendChild(thirdcolumn)
            firstrow.appendChild(fourthcolumn)
            firstrow.appendChild(fifthcolumn)

            for (i = 0; i < clientes.length; i++) {


                let dni = clientes[i].dni

                let nombre = clientes[i].nombre

                let apellidos = clientes[i].apellidos
                let email = clientes[i].email


                let dni1;
                let nombre1;
                let apellido1;
                let email1
                let row
                row = document.createElement("tr")
                dni1 = document.createElement("td")
                dni1.id = "dni"
                nombre1 = document.createElement("td")
                nombre1.id = "nombre"
                apellido1 = document.createElement("td")
                apellido1.id = "apellido"
                email1 = document.createElement("td")
                email1.id = "email"
                dni1.innerText = " " + dni + " "
                nombre1.innerText = " " + nombre + " "
                apellido1.innerText = " " + apellidos + " "
                email1.innerText = " " + email + " "

                clientes1.appendChild(row)
                row.appendChild(dni1);
                row.appendChild(nombre1)
                row.appendChild(apellido1)
                row.appendChild(email1)




            }
        }
    })
document.querySelector("#button2").addEventListener("click", function (event) {
    event.preventDefault();

    let dni = document.querySelector("input[name='dni4']").value;

    fetch(`/clientes/dni?dni=${dni}`)
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response)
            document.querySelector("#individual").innerHTML = "";

            let firstrow = document.createElement("tr")
            let secondcolumn = document.createElement("th")
            let thirdcolumn = document.createElement("th")
            let fourthcolumn = document.createElement("th")
            let fifthcolumn = document.createElement("th")
            let cliente = document.querySelector("#individual")
            secondcolumn.innerText = "Dni"
            thirdcolumn.innerText = "Nombre"
            fourthcolumn.innerText = "Apellido"
            fifthcolumn.innerText = "Email"
            cliente.appendChild(firstrow)

            firstrow.appendChild(secondcolumn)
            firstrow.appendChild(thirdcolumn)
            firstrow.appendChild(fourthcolumn)
            firstrow.appendChild(fifthcolumn)
            for (i = 0; i < response.length; i++) {
                let dni = response[i].dni
                let nombre = response[i].nombre
                let apellidos = response[i].apellidos
                let email = response[i].email
                let dni1;
                let nombre1;
                let apellido1;
                let email1;
                let row
                row = document.createElement("tr")



                dni1 = document.createElement("td")
                dni1.id = "dni"
                nombre1 = document.createElement("td")
                nombre1.id = "nombre"
                apellido1 = document.createElement("td")
                apellido1.id = "apellido"
                email1 = document.createElement("td")
                email1.id = "email"
                dni1.innerText = dni
                nombre1.innerText = nombre
                apellido1.innerText = apellidos
                email1.innerText = email

                cliente.appendChild(row)

                row.appendChild(dni1);
                row.appendChild(nombre1)
                row.appendChild(apellido1)
                row.appendChild(email1)
            }

        })
})





document.querySelector("#button3").addEventListener("click", function (event) {
    event.preventDefault();

    let dni = document.querySelector("input[name='dni2']").value;
    let nombre = document.querySelector("input[name='nombre']").value;
    let apellido = document.querySelector("input[name='apellido']").value;
    let email = document.querySelector("input[name='email']").value;

    let cliente = {
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        email: email

    };
    console.log(cliente);
    let body = JSON.stringify(cliente)



    fetch("/Clientes", {
        method: "POST",
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
document.querySelector("#button4").addEventListener("click", function (event) {
    event.preventDefault();

    let dni = document.querySelector("input[name='dni3']").value;
    let nombre = document.querySelector("input[name='nombre2']").value;
    let apellidos = document.querySelector("input[name='apellido2']").value;
    let email = document.querySelector("input[name='email2']").value;

    let cliente = {
        dni: dni,
        nombre: nombre,
        apellidos: apellidos,
        email: email

    };
    console.log(cliente);
    let body = JSON.stringify(cliente)



    fetch("/Clientes", {
        method: "PUT",
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
document.querySelector("#button5").addEventListener("click", function (event) {
    event.preventDefault();

    let dni = document.querySelector("input[name='dni5']").value;
    console.log(dni)


    let cliente = {
        dni: dni

    };
    console.log(cliente);
    let body = JSON.stringify(cliente)



    fetch("/Clientes", {
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
