// Lavora con il DOM: crea una pagina HTML con 3 paragrafi e 3 bottoni.

// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale. Ogni paragrafo dovra' avere un colore diverso. 
// Il secondo dovra’ rendere il testo dei paragrafi in grassetto.
// Il terzo dovra’ far scomparire e ricomparire i paragrafi.
// TIPS:

// ricordati della proprieta’ display: none in CSS!
// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.


//id should not be used html 


const primoBottone = document.querySelector('#cambia-colore');
const secondoBottone = document.querySelector('#grasetto');
const terzoBottone= document.querySelector('#scompare');
const paragrafi = document.querySelectorAll('.paragrafo');

primoBottone.addEventListener('click', () => {
    paragrafi.forEach((paragrafo) => {
        const R = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        const G = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        const B = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        paragrafo.style.color = `rgb(${R}, ${G}, ${B})`
    })
})

// font-weight: bold;
// 

secondoBottone.addEventListener('click',() => {
    paragrafi.forEach((paragrafo)=>{
        paragrafo.style.fontWeight= 'bold';
    })

}) 

// display: none
// display: block
// display: inline-block

terzoBottone.addEventListener('click',()=>{
    paragrafi.forEach((paragrafo) => {
        if (paragrafo.style.display == 'none') {
            paragrafo.style.display = 'block';
        } else {
            paragrafo.style.display = 'none';
        }
    })

})