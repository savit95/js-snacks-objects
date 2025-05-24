// A partire da un array di stringhe, crea un secondo array formattando 
// le stringhe del primo array in minuscolo e con l'iniziale maiscuola.
// Es: ['pippo','PLUTO','Paperino'] -> ['Pippo'.'Pluto','Paperino'].

let arrayStringUno = ['pippo','PLUTO','Paperino','ToPoLiNo','tOPOliNa'];
let arrayStringDue = [];

for (let i = 0; i < arrayStringUno.length; i++) {
    let string = arrayStringUno[i][0].toUpperCase() + arrayStringUno[i].slice(1).toLocaleLowerCase();
    arrayStringDue.push(string);
}

console.log(arrayStringUno);
console.log(arrayStringDue);