// Crea un Array composto da 10 automobili.
// Ogni oggetto automobile avrá le seguenti proprietá: marca, modello e alimentazione(benzina,diesel,WebGLProgram,elettrrico,metano).Ogni

// Dividi le automobile in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le autro a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array

let car = [
    {marca:'Ferrari',       modello:'488 GTB',      alimentazione:'Benzina'},
    {marca:'BMW',           modello:'M550d',        alimentazione:'Diesel'},
    {marca:'Opel',          modello: 'Astra OPC',   alimentazione: 'GPL'},
    {marca:'Renault',       modello: 'Megane RS',   alimentazione: 'GPL'},
    {marca:'Audi',          modello: 'S5 TDI',      alimentazione: 'Diesel'},
    {marca:'Porsche',       modello: '911 Turbo S', alimentazione: 'Benzina'},
    {marca:'Aston Martin',  modello: 'Vantage',     alimentazione: 'Benzina'},
    {marca:'Mercedes',      modello: 'AMG C 43',    alimentazione: 'Diesel' },
    {marca:'Peugeot',       modello: '308 GTi',     alimentazione: 'GPL' },
    {marca:'Lamborghini',   modello: 'Huracán',     alimentazione: 'Benzina' },
];



let benzina= [];
let diesel = [];
let gpl = [];

for (let i = 0; i < car.length; i++) {
    let type = car[i].alimentazione;
    if (type === 'Benzina') {
        benzina.push(car[i]);
    }else if (type === 'Diesel') {
        diesel.push(car[i]);
    }else {
        gpl.push(car[i]);
    }
    
}

console.log(benzina);
console.log(diesel);
console.log(gpl);

