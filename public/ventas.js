get();
function get() {
    fetch("/Ventas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (response) {
        return response.json()
    }).then(function (response) {
        document.querySelector("#printea").innerHTML = ""
        for (let i = 0; i < response.length; i++) {
            document.querySelector("#printea").innerHTML +=
                (`<li id="list"><b>IdVenta</b>: ${response[i].IdVenta};
                <b>dni_cliente</b>: ${response[i].dni_cliente};
                    <b>idProducto</b>: ${response[i].idProducto};
                    <b>nombreproducto</b>: ${response[i].nombreproducto};
                    <b>categoria</b>: ${response[i].categoria};
                   <b> cantidad</b>: ${response[i].cantidad};
                    <b>importe</b>:
                    ${response[i].importe}</li>`)
        }
    });
}
document.querySelector("#añadir").addEventListener("click", function () {
    let dni_cliente = document.querySelector("input[name='dni_cliente']").value
    let IdVenta = document.querySelector("input[name='IdVenta']").value
    let idProducto = document.querySelector("input[name='idProducto']").value
    let nombreproducto = document.querySelector("input[name='nombreproducto']").value
    var e = document.getElementById("categoria");
    let categoria = e.options[e.selectedIndex].text;
    let cantidad = document.querySelector("input[name='cantidad']").value
    let importe = document.querySelector("input[name='importe']").value
    let tienda2 = {
        dni_cliente: dni_cliente,
        IdVenta: IdVenta,
        idProducto: idProducto,
        nombreproducto: nombreproducto,
        cantidad: cantidad,
        importe: importe,
        categoria: categoria
    }
    console.log(tienda2)
    let body = JSON.stringify(tienda2);
    // let cantidad2 = document.querySelector("input[name='cantidad']").value;
    // let nombreproducto2 = document.querySelector("input[name='nombreproducto']").value;
    // let modificar = {
    //     cantidad: cantidad2,
    //     nombreproducto: nombreproducto2

    // }

    fetch("/Ventas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)

    })
})
//front de update

