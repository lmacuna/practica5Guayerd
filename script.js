//CAJERO AUTOMÁTICO (Pendiente cambio de clave)
let digito1 = Math.floor(Math.random() * 9);
let digito2 = Math.floor(Math.random() * 9);
let digito3 = Math.floor(Math.random() * 9);
let digito4 = Math.floor(Math.random() * 9);
let password;
let usuario;
let opcion;
let saldo = 100000;
let ext;
let contUsuario = 1;
let contPassword = 1;
let deposito;
let contrasenia = digito1 + "" + digito2 + "" + digito3 + "" + digito4;
usuario = prompt("ingrese su Usuario");
while (usuario != "lucas") {
    contUsuario = contUsuario + 1;
    usuario = prompt("Usuario incorrecto!\nvuelva ingresar");
    console.log("ERROR TIPEO USUARIO" + usuario + " INTENTO:" + contUsuario);
}
console.log("USUARIO CORRECTO " + usuario);


alert("esta es su contraseña\n" + contrasenia);

password = prompt("ingrese la contraseña asignada");
while (password !== contrasenia) {
    contPassword = contPassword + 1;
    password = prompt("Contraseña incorrecta!\ningrese la contraseña asignada");
    console.log("ERROR TIPEO PASSWORD" + password + "INTENTO: " + contPassword);
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
        ext = parseFloat(prompt("Saldo: " + "$" + saldo + "\ningrse monto extraccion"));
        while (ext > saldo || ext < 2500 || ext !== NaN || ext === 0) {
            if (ext < 2500) {

                ext = parseFloat(prompt("Minimo 2500!\ningrse monto extraccion"));

            } else if (ext > saldo) {
                ext = parseFloat(prompt("Fondos insuficientes!!!\ningrse monto extraccion"));
                break;
            } else {
                ext = parseFloat(prompt("No ingrese letras!!\nIngrese un monto valido por favor"));
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

        }
        break;
    case 3:
        deposito = parseFloat(prompt("ingrese monto a depositar"));
        saldo = saldo + deposito;
        alert("Operacion ATM System\nsu nuevo saldo es: " + "$ " + saldo);
        console.log("Deposito por ATM System\nCUENTA XXXXXXXXXXXXXXXXX " + "$ " + deposito);
        alert("Gracias por utilizar red ATM\n\nBANCO DE LA PLAZA\nSU BANCO");
        break;
}
console.log("ERROR TIPEO USUARIO " + contUsuario);
console.log("ERROR TIPEO PASSWORD " + contPassword);