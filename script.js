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
let deposito;
let contrasenia = digito1 + "" + digito2 + "" + digito3 + "" + digito4;
usuario = prompt("ingrese su Usuario");
while (usuario != "lucas") {
    usuario = prompt("Usuario incorrecto!\nvuelva ingresar");
}



alert("esta es su contraseña\n" + contrasenia);

password = prompt("ingrese la contraseña asignada");
while (password !== contrasenia) {
    password = prompt("Contraseña incorrecta!\ningrese la contraseña asignada");
}
opcion = parseInt(prompt("BIENVENIDO A \nBANCO DE LA PLAZA\n\nINGRESE OPCION\n\nMENU\n1-SALDO\n2-EXTRACCION\n3-DEPOSITO\n4-CAMBIO DE CLAVE"));
while (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4) {
    alert("ingreso fuera de opciones!\nIngrese nuevamente a continuacion");
    opcion = parseInt(prompt("BIENVENIDO A \nBANCO DE LA PLAZA\n\nINGRESE OPCION\n\nMENU\n1-SALDO\n2-EXTRACCION\n3-DEPOSITO\n4-CAMBIO DE CLAVE"));
}
switch (opcion) {
    case 1:
        alert("Su saldo es: " + saldo);
        console.log("Saldo ATM System" + saldo);
        break;
    case 2:
        ext = parseFloat(prompt("Saldo: " + saldo + "$" + "\ningrse monto extraccion"));
        while (ext > saldo) {
            ext = parseFloat(prompt("Fondos insuficientes!!!\ningrse monto extraccion"));
        }
        opcion = prompt("Desea realizar una extraccion de" + ext + "$\nestas seguro?\n1-si\n2-No");
        while (opcion !== "1" && opcion !== "2") {
            opcion = prompt("Desea realizar una extraccion de" + ext + "$\nestas seguro?\n1-si\n2-No");
        }


        if (opcion == 1) {
            alert("saldo: " + saldo + "$" + "\nExtraccion: " + ext + "$");
            saldo = saldo - ext;
            alert("Operacion ATM System:\n\nUsted realizo una extraccion de:" + ext + "$" + "\nsu nuevo saldo es:" + saldo + "$");
            console.log("Extracción por ATM System" + " " + ext + "$");

        } else if (opcion == 2) {
            alert("gracias por utilizar ATM System!!");
            console.log("sin operar");

        }
        break;
    case 3:
        deposito = parseFloat(prompt("ingrese monto a depositar"));
        saldo = saldo + deposito;
        alert("Operacion ATM System\nsu nuevo saldo es: " + saldo + " $");
        console.log("Deposito por ATM System" + " " + deposito + "$");

        break;
}