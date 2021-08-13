//Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
//Crear al menos un objeto para controlar el funcionamiento de tu simulador.
//Incorporarle sus propiedades y su constructor.
//Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
//Utilizar sus métodos.
//Incorporar al menos un Array en tu proyecto.
//Utilizar algunos de los métodos o propiedades vistos en la clase.


let cerveza = 150

let cantidad = Number(prompt("Cuantas birras queres?"))

function datos(cant){

    console.log((cant*cerveza));
}

datos(cantidad)

//ARRAYS

class Comida {
    constructor(nombre, disponible, cantidad, variedades) {
        this.nombre = nombre
        this.disponible = disponible
        this.cantidad = cantidad
        this. variedades = variedades

    }
    
    preguntar (){
        console.log("Que queres comer?")

    }

}

const comidaMinutas = {
    nombre: "Carnes",
    disponible: true,
    cantidad: 1,
    variedades:["Entraña", "Vacio", 
    "Chorizo", "Morcilla", "Asado"]
}

const comidaHamburguesas = {
    nombre: "Hamburguesas",
    disponible: true,
    cantidad: 2,
    variedades:["Con cheddar y panceta",
            "Con lechuga y tomate",
            "Con aros de cebolla",
            "Con huevo, jamon y queso"]
}

const comidaPizzas = {
    nombre: "Pizzas",
    disponible: true,
    cantidad: 1,
    variedades: ["Muzzarella", "Muzzarella con Jamon",
                "Napolitana", "Cancha", "Fugazzetta",
                "Calabresa", "Salsa Blanca"]
}

const comidaPostres = {
    nombre: "Postres",
    disponible: true,
    cantidad: 1,
    variedades: ["Flan", "Flan con crema y dulce",
                "Budin de pan", "Ensalada de frutas",
                "Helado", "Tiramisu"]
}

console.log (comidaPostres);

const comidas = ["Hamburguesas", "Pizzas", "Minutas", "Postres"];

console.log (comidas.length);
console.log (comidas[1]);
comidas.push("Parrilla", "Vegetariana");
console.log (comidas.length);

const comida1 = new Comida("Carnes", true, 1, "Vacio")
console.log(comida1);