let passwordUsuario = parseInt(prompt("Ingrese su contraseña: "));
const passwordAutorizado = 12345;

for(let i = 0; i < 2; i++){
    if(passwordUsuario === passwordAutorizado){
        console.log("Contraseña correcta, compra con confianza!")
        break;
    }else {
        passwordUsuario = parseInt(prompt("Contraseña incorrecta, no podes realizar compras"))
    }
}

let montoMax = parseInt(prompt("Ingrese monto a utilizar"))

if (montoMax < 1000) {
    alert("Segui compranado estas lejos del limite!! ")
}else if (montoMax <= 2500) {
    alert("Ya casi vas a la mitad!!")
}else if (montoMax <= 4500) {
    alert("Ya casi llegas al descuento especial")
} else if (montoMax >= 5000) {
    alert("Has llegado al limite y se otorga un cupon de descuento!! Gracias")
}else {
    alert("Que gran compra!!")
}


console.log(montoMax)

let tax = (a,b) => {
    return a * b 
}
console.log(tax(montoMax,2.5));



//Segunda Entrega

class Cliente {
    constructor(nombre, apellido, dni, pedido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.pedido = pedido;
    }
}

const clienteEster = new Cliente("Ester", "Riveiro", 12345678, 1000);
const clienteJulian = new Cliente("Julian", "Perez", 87654321, 2000);
const clienteCandela = new Cliente("Candela", "Gonzales", 12345678, 3000);
const clienteJavier = new Cliente("Javier", "Benitez", 12345678, 4000);

const arrayClientes = [];

arrayClientes.push(clienteEster);
arrayClientes.push(clienteJulian);
arrayClientes.push(clienteCandela);
arrayClientes.push(clienteJavier);

console.log(arrayClientes);


function menu() {
    alert("Bienvenido a Master Plast");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de cliente \n 2) Baja de cliente \n 3) Modificación de cliente \n 4) Consulta de cliente \n 5) Salir"));
    return opcion;
}


function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let pedido = parseInt(prompt("Ingrese el pedido del cliente (bolsas): "));
    let cliente = new Cliente(nombre, apellido, dni, pedido);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}


function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}


function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let clienteModificado = new Cliente(nombre, apellido, dni, pedido);
    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}

function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}



function salir() {
    alert("Gracias por realizar tu pedido en Master Plast");
}


let opcion = menu();
switch (opcion) {
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        modificacionCliente();
        break;
    case 4:
        consultaCliente();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opción incorrecta!");
        break;
}
