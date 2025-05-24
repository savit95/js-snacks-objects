// Crea un array di oggetti che rappresentano delle Persone.
// Ogni persona ha un Nome, un cognome e un etá.
// Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona,
// una frase (string) con il nome e cognome e l'indicazione se puó guidare,
// in base all'etá.

let persone = [
    {nome: 'Mario', cognome: 'Rossi', eta: '17'},
    {nome: 'Giulia', cognome: 'Bianchi', eta: '22'},
    {nome: 'Luca', cognome: 'Verdi', eta: '25'},
    {nome: 'Anna', cognome: 'Gialli', eta: '30'},
    {nome: 'Paolo', cognome: 'Neri', eta: '16'},
    {nome: 'Francesca', cognome: 'Blu', eta: '28'},
    {nome: 'Alessandro', cognome: 'Grigi', eta: '40'},
    {nome: 'Chiara', cognome: 'Arancio', eta: '17'},
    {nome: 'Marco', cognome: 'Marroni', eta: '18'},
    {nome: 'Sara', cognome: 'Verde', eta: '27'}
];

messaggi = [];

for (let i = 0; i < persone.length; i++) {
    let element = persone[i];
    let nome = persone[i].nome;
    let cognome = persone[i].cognome;
    let eta = parseFloat(element.eta);
    let messaggio;
    if (eta < 18) {
        messaggio=`${nome} ${cognome} non puó guidare`;
    }else{
        messaggio=`${nome} ${cognome} puó guidare`;
    }
    messaggi.push(messaggio);
}

console.log(messaggi);


