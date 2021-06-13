//CAJERO AUTOMÁTICO (Pendiente cambio de clave)
let digito1 = Math.floor(Math.random() * 9);
let digito2 = Math.floor(Math.random() * 9);
let digito3 = Math.floor(Math.random() * 9);
let digito4 = Math.floor(Math.random() * 9);
let letraPass = Math.floor(Math.random() * 5 + 1);
let letraPasss = Math.floor(Math.random() * 5 + 1);
let letra;
let letraa;
let password;
let usuario;
let opcion;
let saldo = 100000;
let ext;
let contUsuario = 1;
let contPassword = 1;
let deposito;
switch (letraPass) {
    case 1:
        letra = "a";
        break;
    case 2:
        letra = "e";
        break;
    case 3:
        letra = "i";
        break;
    case 4:
        letra = "o";
    case 5:
        letra = "u";
        break;
}
switch (letraPasss) {
    case 1:
        letraa = "a";
        break;
    case 2:
        letraa = "e";
        break;
    case 3:
        letraa = "i";
        break;
    case 4:
        letraa = "o";
    case 5:
        letraa = "u";
        break;
}

let contrasenia = digito1 + "" + digito2 + "" + digito3 + "" + digito4 + "" + letra + "" + letraa;
usuario = prompt("ingrese su Usuario");
while (usuario != "lucas") {

    usuario = prompt("Usuario incorrecto!\nvuelva ingresar");
    console.log("ERROR TIPEO USUARIO  INTENTO:" + contUsuario);
    contUsuario = contUsuario + 1;
}
console.log("USUARIO CORRECTO " + usuario);


alert("esta es su contraseña\n" + contrasenia);

password = prompt("ingrese la contraseña asignada");
while (password !== contrasenia) {

    password = prompt("Contraseña incorrecta!\ningrese la contraseña asignada -->" + contrasenia);
    console.log("ERROR TIPEO PASSWORD  INTENTO: " + contPassword);
    contPassword = contPassword + 1;
}
console.log("PASSWORD CORRECTO " + password);
opcion = parseInt(prompt("BIENVENIDO A \nBANCO DE LA PLAZA\n\nINGRESE OPCION\n\nMENU\n1-SALDO\n2-EXTRACCION\n3-DEPOSITO\n4-CAMBIO DE CLAVE"));
while (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4) {
    alert("ingreso fuera de opciones!\nIngrese nuevamente a continuacion");
    opcion = parseInt(prompt("BIENVENIDO A \nBANCO DE LA PLAZA\n\nINGRESE OPCION\n\nMENU\n1-SALDO\n2-EXTRACCION\n3-DEPOSITO\n4-CAMBIO DE CLAVE"));
}
switch (opcion) {
    case 1:
        alert("Su saldo es: " + "$" + saldo);
        console.log("Saldo ATM System" + "$" + saldo);
        alert("Gracias por utilizar red ATM\n\nBANCO DE LA PLAZA\nSU BANCO");
        break;
    case 2:
        console.log("EXTRACCION");
        ext = parseFloat(prompt("Saldo: " + "$" + saldo + "\ningrese monto extraccion"));
        while (ext > saldo || ext < 2500 || ext === 0 || isNaN(ext)) {
            if (ext < 2500) {

                ext = parseFloat(prompt("Minimo 2500!\ningrese monto extraccion"));


            } else if (ext > saldo) {
                ext = parseFloat(prompt("Fondos insuficientes!!!\ningrese un monto menor al saldo"));


            } else {
                ext = parseFloat(prompt("has ingresado letras\ningrese un monto valido"))
            }


        }

        opcion = prompt("Desea realizar una extraccion de" + "$ " + ext + "\nestas seguro?\n1-si\n2-No");
        while (opcion !== "1" && opcion !== "2") {
            opcion = prompt("Desea realizar una extraccion de" + "$ " + ext + "\nestas seguro?\n1-si\n2-No");
        }


        if (opcion == 1) {
            alert("saldo: " + "$ " + saldo + "\nExtraccion: " + "$ " + ext);
            saldo = saldo - ext;
            alert("Operacion ATM System:\n\nUsted realizo una extraccion de:" + "$ " + ext + "\nsu nuevo saldo es:" + saldo + "$");
            console.log("Extracción por ATM System" + " " + "$ " + ext);
            console.log("SALDO CUENTA XXXXXXXXXXXXXX " + "$" + saldo);
            alert("Gracias por utilizar red ATM\n\nBANCO DE LA PLAZA\nSU BANCO");

        } else if (opcion == 2) {
            alert("gracias por utilizar ATM System!!");
            console.log("EXTRACCION: sin operar");
            console.log("SALDO CUENTA XXXXXXXXXXXXXX " + "$" + saldo);

        }
        break;
    case 3:
        deposito = parseFloat(prompt("ingrese monto a depositar"));
        saldo = saldo + deposito;
        alert("Operacion ATM System\nsu nuevo saldo es: " + "$ " + saldo);
        console.log("Deposito por ATM System " + "$ " + deposito);
        console.log("SALDO CUENTA XXXXXXXXXXXXXXXXX " + "$ " + saldo);
        alert("Gracias por utilizar red ATM\n\nBANCO DE LA PLAZA\nSU BANCO");
        break;
}
console.log("ERROR TIPEO USUARIO " + (contUsuario - 1));
console.log("ERROR TIPEO PASSWORD " + (contPassword - 1));