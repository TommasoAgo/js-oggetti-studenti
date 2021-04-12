// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// Dare la possibilità all’utente, attraverso 3 prompt(),
//  di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creo un oggetto 'Studente'
var studente = {
    'nome' : 'Francesco',
    'cognome' : 'Totti',
    'eta' : 45
}

// Stampo in un ciclo for - in le caratteristiche di 'Studente'
for ( var key in studente ) {
    console.log(studente[key])
}

// Creo un Array 'Classe' che contiene gli oggetti 'Studenti'
var arrayStudenti = [
    {
        // Studente 1 
        'nome' : 'Groucho',
        'cognome' : 'Marx',
        'eta' : 60
    },
    {
        // Studente 2
        'nome' : 'Friedrich',
        'cognome' : 'Nietzsche',
        'eta' : 55    
    },
    {
        // Studente 3
        'nome' : 'Marcel',
        'cognome' : 'Duchamp',
        'eta' : 81
    }
];

// Stampo in un ciclo for le proprietà 'nome' e 'cognome' dei singoli 'oggetti' 'Studenti'

// Lo chiudo dentro un ciclo for per vedere caso per caso
for ( var i = 0; i < arrayStudenti.length; i++ ) {

    // Adesso ho in una variabile ogni singolo oggetto dell'arrayStudenti
    thisStudente = arrayStudenti[i];

    // Stampo nome e cognome di ogni singolo studente
    console.log(thisStudente.nome);
    console.log(thisStudente.cognome);
}

// Chiedo all'utente 3 prompt 

// Creo una variabile per ogni valore dato dall'utente
var nomeUtente = prompt('Inserisci il tuo nome');
var cognomeUtente = prompt('Inserisci il tuo cognome');
var etaUtente = parseInt(prompt('Inserisci la tua età'));

// Creo un oggetto 'Studente'
var nuovoStudente = {
    'nome' : nomeUtente,
    'cognome' : cognomeUtente,
    'eta' : etaUtente
}

// Pusho il nuovo studente nell'Array della classe
arrayStudenti.push(nuovoStudente);

console.log(arrayStudenti);




    