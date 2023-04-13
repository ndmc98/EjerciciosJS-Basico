/*
Ejemplos de tipos de 
    datos en JavaScript
*/

/*
 * PRIMITIVOS
 */

//Tipo de dato: String
var nombre = "Camilo";
console.log(nombre);

//Type of - tipo de dato
console.log(typeof nombre);
nombre = 1000;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato: Numérico
var numero = 25;
console.log(numero);
console.log(typeof numero);

//Tipo de dato: Booleano
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato: Symbol (Valor único para una variable) - ECMA 6
//Cada vez que creamos uno nuevo, es completamente diferente y no se compara con ningún otro símbolo, incluso si se crean a partir del mismo valor.

var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

var simbolo2 = Symbol("Mi simbolo");

console.log(simbolo === simbolo2);

//Tipo de dato: Undifined (default)
var x;
console.log(x);
console.log(typeof x);

var c = undefined;
console.log(c)
console.log(typeof c)

let num = 5;
let numS = "10";

let suma = num + numS;
console.log(typeof suma)

/**
 * OBJETOS
 */

//Tipo de dato: Objeto - object
var objeto = {
    nombre : "Norbey",
    apellido : "Muñoz",
    telefono : 3153160759
}

console.log(objeto);
console.log(typeof objeto);

//Tipo null
var y = null;
console.log(y);
console.log("NULOOOO: " + typeof y);

// Array
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos)
console.log(typeof autos)

/**
 * FUNCIONES
 */

//Tipo de dato: function
function myfuncion(){

}
console.log(myfuncion);
console.log("FUNCIÓN: " + typeof myfuncion);


//Tipo de dato: Clase, también son funciones
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);
