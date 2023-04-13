/**
 * WHILE
 */

let contador = 0;

while(contador <= 10){
    console.log(contador);
    contador ++;
}

console.log("Fin de ciclo while");

/**
 * DO WHILE
 */

contador = 0;

do{
    console.log(contador);
    contador++;
}while(contador < 4);

console.log("Fin ciclo do while");

/**
 * FOR
 */

for(let contador = 0; contador < 4; contador++ ){
    console.log(contador);
}
console.log("Fin ciclo for");

/*
    BREAK
*/

for (let i = 0; i <= 10; i++){
    if( i%2 == 0 ){
        console.log(i);
        break;
    }
}
console.log("Fin del ciclo for con Break");

/*
CONTINUE - SIGUIENTE ITERACIÓN
*/

for (let j = 0; j <= 10; j++){
    if( j%2 !== 0 ){
        continue;//Ir a la siguiente iteración
    }
    console.log(j);
}