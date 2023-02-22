'use sctrict';


// Informazioni Utente
const nomeCognome = document.getElementById("nomeCognome");
const chilometri = document.getElementById("chilometri").value;
let fasciaEta = document.getElementById("fasciaEta").value;

const minorenne = document.getElementById("minorenne");
const maggiorenne = document.getElementById("maggiorenne");
const over65 = document.getElementById("over65");

// Prezzo del biglietto al km
const prezzoAlKm = 0.21;

// Buttons
const button = document.querySelector(".button");

// Prezzo del biglietto finale
let prezzoBiglietto = chilometri * prezzoAlKm;

// Prezzo finale con sconti applicati
if (fasciaEta == minorenne){
    prezzoBiglietto - (prezzoBiglietto / 100 * 20);
} else if (fasciaEta == over65) {
    prezzoBiglietto - (prezzoBiglietto / 100 * 40);
}

// Evento click su bottone Genera
button.addEventListener('click',
    function(){
        console.log(document.getElementById("nomeCognome").value);
        console.log(prezzoBiglietto.toFixed(2));    
    }
)