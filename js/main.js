'use sctrict';


// Informazioni Utente
const nomeCognome = document.getElementById("nomeCognome");
const chilometri = document.getElementById("chilometri");
const fasciaEta = document.getElementById("fasciaEta");

// Variabili TIcket
const textName = document.getElementById('textnomeCognome');
const textOffer = document.getElementById('ticket');
const carrozza = document.getElementById('carrozza');
const textCp = document.getElementById('text-cp');
const textPrezzo = document.getElementById('prezzo');


// Button
const button = document.querySelector(".button");
const reset = document.getElementById('reset');

const display = document.querySelector(".display");


// Evento click su bottone Genera
button.addEventListener('click',
    function(){ 
        // Valori richiesti
        const inputNameValue = nomeCognome.value;
        const inputKmValue = Number(chilometri.value);
        const inputEtaValue = fasciaEta.value;

        console.log({inputNameValue, inputKmValue, inputEtaValue});

        let prezzoBiglietto = inputKmValue * 0.21;
        let message = 'Biglietto Standard';
        // Prezzo finale con sconti applicati
            if (inputEtaValue === 'minorenne'){
                prezzoBiglietto = prezzoBiglietto * 0.8;
                message = 'Sconto Minorenne';
            } else if (inputEtaValue === 'over65') {
                prezzoBiglietto = prezzoBiglietto * 0.6;
                message = 'Sconto Over';
            }

        prezzoBiglietto = prezzoBiglietto.toFixed(2);
        console.log(prezzoBiglietto);

        textName.innerHTML = inputNameValue;
        textOffer.innerHTML = message;
        carrozza.innerHTML = nomeCognome;
        textCp.innerHTML = nomeCognome;
        textPrezzo.innerHTML =  `${prezzoBiglietto} $ `;

        // Mostra biglietto
        display.classList.add("displayshow");

        


        }
);

reset.addEventListener('click', 
function(){
    display.classList.remove("display");
    textName.value = '';


})