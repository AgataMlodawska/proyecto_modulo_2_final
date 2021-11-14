document.querySelector("#dnilistados").addEventListener("click", function (e) {
    e.preventDefault();

    let dni_cliente = document.querySelector("input[name='dni_cliente']").value
    console.log(dni_cliente);

    fetch(`/listados/filtro?dni_cliente=${dni_cliente}`)
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response)
            document.querySelector("#listados2").innerHTML = "";
            let firstrow = document.createElement("tr")
            let secondcolumn = document.createElement("th")
            let thirdcolumn = document.createElement("th")
            let fourthcolumn = document.createElement("th")
            let fifthcolumn = document.createElement("th")
            let sixthcolumn = document.createElement("th")
            let seventhcolumn = document.createElement("th")
            let listados2 = document.querySelector("#listados2")
            secondcolumn.innerText = "Dni"
            thirdcolumn.innerText = "IdVenta"
            fourthcolumn.innerText = "Categoría"
            fifthcolumn.innerText = "Producto"
            sixthcolumn.innerText = "Cantidad"
            seventhcolumn.innerText = "Importe"
            listados2.appendChild(firstrow)
            firstrow.appendChild(secondcolumn)
            firstrow.appendChild(thirdcolumn)
            firstrow.appendChild(fourthcolumn)
            firstrow.appendChild(fifthcolumn)
            firstrow.appendChild(sixthcolumn)
            firstrow.appendChild(seventhcolumn)

            for (let i = 0; i < response.length; i++) {
                console.log(response[i])
                let dni_cliente = response[i].dni_cliente
                let IdVenta = response[i].IdVenta
                let categoria = response[i].categoria
                console.log(categoria)
                let nombreProducto = response[i].nombreproducto
                let cantidad = response[i].cantidad
                let importe = response[i].importe
                let dni_cliente1;
                let IdVenta1;
                let categoria1;
                let nombreProducto1;
                let cantidad1;
                let importe1;
                row = document.createElement("tr")
                dni_cliente1 = document.createElement("td")
                dni_cliente1.id = "dnicliente"
                IdVenta1 = document.createElement("td")
                IdVenta1.id = "IdVenta"
                categoria1 = document.createElement("td")
                categoria1.id = "categoria"
                nombreProducto1 = document.createElement("td")
                nombreProducto1.id = "nombreProducto"
                cantidad1 = document.createElement("td")
                cantidad1.id = "cantidad"
                importe1 = document.createElement("td")
                importe1.id = "importe"


                dni_cliente1.innerText = dni_cliente
                IdVenta1.innerText = IdVenta
                categoria1.innerText = categoria
                nombreProducto1.innerText = nombreProducto
                cantidad1.innerText = cantidad
                importe1.innerText = importe + "€"

                listados2.appendChild(row)
                row.appendChild(dni_cliente1);
                row.appendChild(IdVenta1)
                row.appendChild(categoria1)
                row.appendChild(nombreProducto1);
                row.appendChild(cantidad1)
                row.appendChild(importe1)



            }

        })
})


fetch("http://localhost:3002/listados/desc")
    .then(function (response) {
        return response.json();

    })
    .then(function (res) {

        console.log(res)
        if (document.getElementById("button6")) { document.getElementById("button6").addEventListener("click", descending) }
        function descending() {
            document.querySelector("#descendiente1").innerHTML = "";
            let firstrow = document.createElement("tr")
            let firstcolumn = document.createElement("th")
            let secondcolumn = document.createElement("th")
            let thirdcolumn = document.createElement("th")
            let fourthcolumn = document.createElement("th")
            let descendiente1 = document.querySelector("#descendiente1")
            firstcolumn.innerText = "Categoría"
            secondcolumn.innerText = "Nombre producto"
            thirdcolumn.innerText = "Cantidad"
            fourthcolumn.innerText = "Importe"
            descendiente1.appendChild(firstrow)
            firstrow.appendChild(firstcolumn)
            firstrow.appendChild(secondcolumn)
            firstrow.appendChild(thirdcolumn)
            firstrow.appendChild(fourthcolumn)

            for (i = 0; i < 4; i++) {

                let categoria = res[i].categoria

                let nombreproducto = res[i].nombreproducto

                let cantidad = parseInt(res[i].cantidad)

                let importe = res[i].importe


                let categoria1;
                let nombreproducto1;
                let cantidad1;
                let importe1;
                let row
                row = document.createElement("tr")
                categoria1 = document.createElement("td");
                categoria1.id = "categoria"
                nombreproducto1 = document.createElement("td")
                nombreproducto1.id = "nombreproducto"
                cantidad1 = document.createElement("td")
                cantidad1.id = "cantidad"
                importe1 = document.createElement("td")
                importe1.id = "precio"
                categoria1.innerText = categoria
                nombreproducto1.innerText = nombreproducto
                cantidad1.innerText = cantidad
                importe1.innerText = importe + " €"

                descendiente1.appendChild(row)
                row.appendChild(categoria1);
                row.appendChild(nombreproducto1);
                row.appendChild(cantidad1)
                row.appendChild(importe1)


            }











        }

    })



fetch("http://localhost:3002/listados/asc")
    .then(function (response) {
        return response.json();

    })
    .then(function (res) {
        console.log(res)
        if (document.getElementById("button7")) { document.getElementById("button7").addEventListener("click", ascending) }
        function ascending() {
            document.querySelector("#ascendiente1").innerHTML = "";
            let firstrow = document.createElement("tr")
            let firstcolumn = document.createElement("th")
            let secondcolumn = document.createElement("th")
            let thirdcolumn = document.createElement("th")
            let fourthcolumn = document.createElement("th")
            let ascendiente1 = document.querySelector("#ascendiente1")
            firstcolumn.innerText = "Categoría"
            secondcolumn.innerText = "Nombre producto"
            thirdcolumn.innerText = "Cantidad"
            fourthcolumn.innerText = "Importe"
            ascendiente1.appendChild(firstrow)
            firstrow.appendChild(firstcolumn)
            firstrow.appendChild(secondcolumn)
            firstrow.appendChild(thirdcolumn)
            firstrow.appendChild(fourthcolumn)

            for (i = 0; i < 4; i++) {

                let categoria = res[i].categoria

                let nombreproducto = res[i].nombreproducto

                let cantidad = parseInt(res[i].cantidad)

                let importe = res[i].importe


                let categoria1;
                let nombreproducto1;
                let cantidad1;
                let importe1;
                let row
                row = document.createElement("tr")
                categoria1 = document.createElement("td");
                categoria1.id = "categoria"
                nombreproducto1 = document.createElement("td")
                nombreproducto1.id = "nombreproducto"
                cantidad1 = document.createElement("td")
                cantidad1.id = "cantidad"
                importe1 = document.createElement("td")
                importe1.id = "precio"
                categoria1.innerText = categoria
                nombreproducto1.innerText = nombreproducto
                cantidad1.innerText = cantidad
                importe1.innerText = importe + " €"

                ascendiente1.appendChild(row)
                row.appendChild(categoria1);
                row.appendChild(nombreproducto1);
                row.appendChild(cantidad1)
                row.appendChild(importe1)



            }











        }

    })
let porcentaje = []
fetch("http://localhost:3002/listados")
    .then(function (response) {
        return response.json();

    })
    .then(function (res) {
        porcentaje = Object.assign(res)
        console.log(porcentaje)
        if (document.getElementById("button8")) { document.getElementById("button8").addEventListener("click", percent) }
        function percent() {
            document.querySelector("#porcentaje1").innerHTML = "";
            let firstrow = document.createElement("tr")
            let firstcolumn = document.createElement("th")
            let secondcolumn = document.createElement("th")
            let thirdcolumn = document.createElement("th")
            let porcentaje1 = document.querySelector("#porcentaje1")
            firstcolumn.innerText = "Categoría"
            secondcolumn.innerText = "Nombre producto"
            thirdcolumn.innerText = "Porcentaje"
            porcentaje1.appendChild(firstrow)
            firstrow.appendChild(firstcolumn)
            firstrow.appendChild(secondcolumn)
            firstrow.appendChild(thirdcolumn)




            let dataSum = 0

            for (let i = 0; i < porcentaje.length; i++) {
                dataSum += porcentaje[i].cantidad
            }

            const totalSum = dataSum
            console.log(totalSum)
            for (let j = 0; j < porcentaje.length; j++) {
                percent = porcentaje[j].cantidad
                totalporcentaje = Math.round(((percent * 100) / totalSum))
                console.log(totalporcentaje)
                productname = porcentaje[j].nombreproducto
                console.log(productname)
                categoria = porcentaje[j].categoria
                console.log(categoria)
                let categoria1;
                let productname1;
                let totalporcentaje1;
                let row
                row = document.createElement("tr")
                categoria1 = document.createElement("td");
                categoria1.id = "categoria"
                productname1 = document.createElement("td")
                productname1.id = "nombreproducto"
                totalporcentaje1 = document.createElement("td")
                totalporcentaje1.id = "cantidad"
                categoria1.innerText = categoria
                productname1.innerText = productname
                totalporcentaje1.innerText = totalporcentaje + " %"
                porcentaje1.appendChild(row)
                row.appendChild(categoria1);
                row.appendChild(productname1);
                row.appendChild(totalporcentaje1)

            }











        }

    })

$(document).ready(function () {
    $('#porcentaje1').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});
