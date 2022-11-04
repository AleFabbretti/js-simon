`use strict`

// Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//FUNZIONI

//creo una funzione che va a generare numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//MAIN

const numberArray = [];

while (numberArray.length < 5) {

    let numberRandom = getRndInteger(1, 100);
    if (numberArray.includes(numberRandom) === false) {
        numberArray.push(numberRandom);
    }
}
console.log(numberArray);

//seleziono il div nel quale stampare i numeri generati

const container = document.querySelector(".numbers");

//attraverso un ciclo vado a stampare i numeri all'interno della pagina

for ( i = 0; i < numberArray.length; i++) {
    let list = document.createElement("div");
    list.innerHTML = numberArray[i];
    container.append(list);
}

//creo un timer di 30 secondi, passati i quali i numeri precedentemente stampati scompariranno

setInterval(function (){
    container.classList.add(`ghost-numbers`);
}, 30000);

//creo un prompt dove l'utente inserirà i numeri 

let userNumber;
let userNumberChoise = [];
let result = [];

setTimeout(function(){
    for ( i = 0; i < 5; i++) {
        userNumber = Number(prompt("Inserisci i numeri visualizzati precedentemente"));
        userNumberChoise.push(userNumber);
    }
    for ( let i = 0; i < numberArray.length; i++){
        if (userNumberChoise.includes(numberArray[i])) {
            result.push(numberArray[i]);
        }
    }  
}, 31000);

        