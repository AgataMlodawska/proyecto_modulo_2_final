document.querySelector("#register").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.querySelector("input[name='login']").value;
    let password = document.querySelector("input[name='password']").value;


    let register = {
        username: username,
        password: password

    };
    console.log(register);
    let body = JSON.stringify(register)



    fetch("/users/registro", {
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
document.querySelector("#login").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.querySelector("input[name='login2']").value;
    let password = document.querySelector("input[name='password2']").value;


    let login = {
        username: username,
        password: password

    };
    console.log(login);
    let body = JSON.stringify(login)



    fetch("/users/login", {
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