//Variabile che contiene la value per eseguire o non eseguire uno dei 2 esercizi
let scelta_esercizio = prompt("quale esercizio eseguiamo?\n1 -> esercizio Mail\n2 -> esercizio dadi\naltro -> arresto del programma");
//se la scelta_esercizio ha valore 1, allora eseguiamo la 1 traccia
if (scelta_esercizio == 1){

    //array email
    const invitati_Email = [
        "giulia.rossi239@gmail.com",
        "marco_fantasma84@gmail.com",
        "luca.nightwolf72@gmail.com",
        "elena.dreamerx13@gmail.com",
        "andrea.fakeuser007@gmail.com",
        "chiara.moonlight55@gmail.com"
    ];
    //chiediamo la email e vediamo se si trova nella lista
    const check_email = prompt("scrivi qui una email e vediamo se si trova nella lista");
    //variabile booleana che ci consente di sapere se il valore di check_email si trova nell'array
    let trovato = false;
    //cerchiamo la email nella lista invitati_email
    for(let i = 0; i < invitati_Email.length; i++){
        if(check_email == invitati_Email[i]){
            trovato = true;
        }
    }
    if (trovato){
        console.log("trovato! benvenuto!")
    }
    else{
        console.log("non sei nella lista...")
    }
}
//se la scelta_esercizio ha valore 2, allora eseguiamo la 2 traccia
else if (scelta_esercizio == 2){

    const User = Math.floor((Math.random() * 6) + 1);
    const Bot = Math.floor((Math.random() * 6) + 1);
    if (User > Bot){
        console.log(`l'utente ha vinto con ${User} contro il bot che ha fatto ${Bot}`)
    }
    else if (User < Bot){
        console.log(`l'utente ha perso con ${User} contro il bot che ha fatto ${Bot}`)
    }
    else{
        console.log(`l'utente ha pareggiato con ${User} contro il bot che ha fatto ${Bot}`)
    }

}