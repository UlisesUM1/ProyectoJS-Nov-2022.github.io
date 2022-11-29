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