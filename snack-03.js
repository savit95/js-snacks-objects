// Crea un array di oggetti che rappresentano degli Animali.
// Ogni animale ha un Nome,una famiglia e una classe.



// Crea un nuovo array con la lista dei mammiferi.


let animals = [
    {nome:'Leone',          famiglia:'Felidi',          classe:'Mammiferi'},
    {nome:'Cane',           famiglia:'Canidi',          classe:'Mammiferi'},
    {nome:'Gallina',        famiglia:'Fasianidi',       classe:'Uccelli'},
    {nome:'Elefante',       famiglia:'Elefantidi',      classe:'Mammiferi'},
    {nome:'Tigre',          famiglia:'Felidi',          classe:'Mammiferi'},
    {nome:'Gatto',          famiglia:'Felidi',          classe:'Mammiferi'},
    {nome:'Cavallo',        famiglia:'Equidi',          classe:'Mammiferi'},
    {nome:'Papero',         famiglia:'Anatidi',         classe:'Uccelli'},
    {nome:'Pinguino',       famiglia:'Spheniscidae',    classe:'Uccelli'},
    {nome:'Coccodrillo',    famiglia:'Crocodylidae',    classe:'Rettili'},
    {nome:'Serpente',       famiglia:'Colubridae',      classe:'Rettili'},
    {nome:'Squalo',         famiglia:'Carcharhinidae',  classe:'Pesci'},
    {nome:'Balena',         famiglia:'Balaenidae',      classe:'Mammiferi'},
    {nome:'Delfino',        famiglia:'Delphinidae',     classe:'Mammiferi'},
    {nome:'Koala',          famiglia:'Phascolarctidae', classe:'Mammiferi'},
    {nome:'Kangaroo',       famiglia:'Macropodidae',    classe:'Mammiferi'},
    {nome:'Orango',         famiglia:'Hominidae',       classe:'Mammiferi'}
];

let mammiferi = [];

for (let i = 0; i < animals.length; i++) {
    if (animals[i].classe === 'Mammiferi') {
        mammiferi.push(animals[i]);
    }  
}

console.log(mammiferi);

