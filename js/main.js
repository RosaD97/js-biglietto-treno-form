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
        let mostra = document.querySelector(".display");
        mostra.classList.toggle("display");
                // Dati Nome e Cognome stampati in ticket
                const utente = nomeCognome.value;
                document.querySelector(".nomeCognome").innerHTML = utente;
                // Prezzo biglietto stampato in ticket
                const prezzoFinale = (prezzoBiglietto) + `€`; 
                document.querySelector(".prezzo").innerHTML = prezzoFinale;
    }
)


const reset = document.querySelector(".reset");

button.addEventListener('click',
    function clearResult(form){
        document.getElementById("nomeCognome").value;
    }
)


