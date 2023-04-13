miFuncion(465,5);

//Declaración de la función

function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

miFuncion(2,5);
miFuncion(2,4);
miFuncion(13,5);
miFuncion(354,3548);

//Con Hoisting la se puede llamar la función incluso antes de declararla en el archivo


/*
Return
*/

function suma(num1, num2){
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

console.log(suma(2, 5));

/*
Funciones de tipo Expresión
*/

let x = function (a,b){return a + b};
let resultado = x(1, 2);
console.log(resultado);


/**
 * Recursiva
 */

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3));

/*
Función self invoquing
NO se pueden reutilizar
*/

(function (a, b){
    console.log('Ejecutando la funcion: ' + (a+b));
})(3, 4);



/**
 Funciones flecha
 */

const sumarFuncionFlecha = (num1, num2) => num1+num2;
resultado = sumarFuncionFlecha(3, 5);
console.log(resultado);

/*
Los parámetros son las variables definidas como input a la función, mientras que los argumentos son los valores asignados en un llamado a la funcion
 */

const plus = (a, b) => a + b;

function suma2(a, b){
    return a+b;
}

console.log(suma2(2, 5))

/**
 * CLOSURE
 */

var constructor = function(parametro){
    var miObjeto = {
      propiedad1 : parametro
    }
    return miObjeto;
  }
  
  nuevoObjeto = constructor("Norbey");
  
  nuevoObjeto;
  
  //miObjeto;

function miFuncion() {
    let count = 1
    function contador() {
        console.log(count)
    }
    contador() // imprime 1
}

console.log(miFuncion())

//count

/**
 * PASO POR VALOR Y POR REFERENCIA
 */


let n = 10;

function cambiarValor(a){
    a=20;
    return;
}
// Paso por valor
cambiarValor(n);
console.log(n)
//console.log(a);

//paso por referencia
const persona = {
    nombre: 'Camilo',
    apellido: 'Rocha'
}

function cambiarValorObjeto(p1){
    p1.nombre = "Sebastián";
    p1.apellido = "Vanegas";
}

cambiarValorObjeto(persona);
console.log(persona.apellido);