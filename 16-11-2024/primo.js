// ⁠Arrow function e differenze con versione es5
// •⁠  ⁠Funzioni anonime e callback function
// •⁠  ⁠⁠oggetti e metodi degli oggetti 
// •⁠  ⁠⁠riferimento this
// •⁠  ⁠⁠qualche nozione in più sugli array, avevo visto che si possono vedere anche come matrici.


//  this  ---> contesto
//  ⁠Funzioni anonime e callback function
//  ⁠Arrow function e differenze con versione es5
// const arraysOfProperties = ['log', 'error', 'tippo'];



// creami un oggetto persona con le proprietà nome, cognome, indirizzo


// let user = {
//     nome: `luigi`,
//     cognome:`sfregola`,
//     età: 29,
//     stampa: function(){
//         // this = user
//         console.log(`${this.nome} ${this.cognome}`);
//     }, 
// }

// let auto = {
//     targa: `luigi`,
//     marca:`sfregola`,
//     cilandrata: 29,
//     cavalli: 4,
//     stampa: function(){
//         // this = user
//         console.log(`${this.nome} ${this.cognome}`);
//     },
// }

// user.stampa();

// function calcolaLamediaAritmetica (a, b) {
//    return (a + b) / 2
// } 


function user(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    stampa = function () {
        console.log(this.name);
    }

    console.log(this)
}

user('test','abc',12)

// console.log("michele" < "sasi");

// const matrix = [[1,  2],
//                 [3,  4],
//                 [5,  6],
//                 [7,  8]];

// matrix[2][1]