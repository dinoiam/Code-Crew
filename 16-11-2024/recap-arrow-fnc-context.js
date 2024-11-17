// this è chiamato contex, cioè il contesto di esecuizione in cui una funzione viene eseguita

// NOTA le function dichiarate all'interno di oggetti o funzioni vengono chiamate "METODI"

// METODI (methods) all'interno di oggetti:

// nomeMethod: function (parametroUno, parametroDue) {
//   ...
// }

// METODI (methods) all'interno di funzioni:

// const/let nomeMethod = function (parametroUno, parametroDue) {
//   ...
// }

// FUNZIONI (functions)
// function nomeFunzione (parametroUno, parametroDue) {
//   ...
// }


function printContext() {
    console.log(this)
}

const obj1 = {
    address: "via roma",
    number: 123,
    owner: "Mario Rossi",
    type: 'obj1',
    print: printContext // questo è un metodo
}

const obj2 = {
    plate: "AA000AA",
    fuelType: "Diesel",
    chilometers: 40000,
    type: 'obj2',
    print: printContext // questo è un metodo
}

// printContext(); // questo stamperà in console il contesto globale, se fossimo nel browser sarebbe la window.
// obj1.print(); // cosa stamperà qui?
// obj2.print(); // cosa stamperà qui?


// La stessa funzione, in questo caso "printContext", invocata in un contesto diverso avrà un this diverso
// Riga 21 il this sarà uguale al contesto globale perchè non abbiamo specificato altro
// Riga 22 il this sarà uguale a ???? perchè ??
// Riga 23 il this sarà uguale a ???? perchè ??


// Il riferimento al contesto di una funzione è ottenuto tramite la KeyWord "this"
// Il this quindi non ha un valore iniziale predefinito ma cambia in base a dove viene chiamata la funzione


//ARROW vs NORMAL

// Con una arrow function il this rappresenta il proprietario della funzione

// Sintassi

// parentesi tonde, freccia, parentesi graffe
// () => {}

// arrow function associata a const o let
// const myFunction = () => {}

// all'interno di un oggetto invece 
// myProperty: () => {}


function Users(nome) {
    this.nome = nome;

   this.costruisciFirma = function(cognome) { // Nota come sto usando una function qui, invece a riga 97 useremo un arrow function
        console.log(this.nome, cognome);
    };
}
    
const luigi = new Users('luigi');
luigi.costruisciFirma('sfregola'); // in questo caso "costruisciFirma" viene invocato da luigi, quindi il context (this) sarà popolato

const luigiDuplicato = luigi.costruisciFirma; // copiamo "costruisciFirma" dentro la variabile luigiDuplicato
luigiDuplicato('sicuramenteConLaC'); // in questo caso "luigiDuplicato "sarà uguale a luigi.costruisciFirma, 
// ma dato che le "function" hanno un assegnazione del context dimanico, cioè il this è valorizzato al momento dell'esecuzione
// quando luigiDuplicato('sicuramenteConLaC'); viene eseguito il this non sarà valorizzato il this.nome a riga 78 sarà undefined


// Lo stesso esempio di prima soltanto che a costruisciFirma assegniamo come valore un arrow function.
// il contesto delle arrow function (this) sarà quindi uguale al contesto di dove viene definita l'arrow function

function Users2(nome) {
    this.nome = nome;

    this.costruisciFirma = (cognome) => { // stiamo usando l'arrow function, 
        console.log(this.nome, cognome); // qui dentro il this sarà sempre equivalente al contesto di Users2
    };
}
    
const sasi = new Users2('sasi');
sasi.costruisciFirma('cavallaro');

const sasiDuplciato = sasi.costruisciFirma;
sasiDuplciato('CAVALLOPAZZO'); // anche se qui stiamo chiamando sasiDuplciato che è uguale a sasi.costruisciFirma 
// senza specificare da dove stiamo chiamando, l'output in console sarà corretto perchè appunto costruisciFirma
// a riga 97 è un arrow function e il context (this) è stato ereditato dallo scope più vicino cioe Users2
