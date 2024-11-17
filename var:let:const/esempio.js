- var ha uno scope globale cioè esiste in tutto lo script
- let ha uno scope di blocco cioè esiste soltanto nel blocco dove viene dichiarata
- const ha uno scope di blocco cioè esiste soltanto nel blocco dove viene dichiarata
- blocco esterno è visibile dal blocco interno, blocco interno non è visibile dal blocco esterno
- var è bandita non si usa
- scope = dominio, dove esiste
- hoisting tutte le dichiarazioni di variabili, funzioni ecc vengono spostate all'inizio del file 
- hoisting funziona solo con var per le variabili 
- non dovresti mai utilizzare funzioni o variabili prima di averle dichiarate


// myName = 'Chris'; // Corrisponde a ---> var myName = 'Chris';


function logName() {  
    sasiName = "sasi";    // dichiarare una funzioni
    console.log(sasiName);
}

logName();

// let myName;

// fai il tuo ragionamento e mi scrivi con il commento cosa logga

