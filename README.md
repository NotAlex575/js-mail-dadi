Esercizio di oggi:
nome repo: js-mail-dadi

Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Fate sempre il file readme.md in cui scrivere i testi dell'esercizio e scomporre il problema in sottoproblemi. 
Numero di push minimo totale: 6

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare,
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare,
si ma noi cosa vogliamo fare?,
torniamo a scrivere in italiano,
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Esercizio:

1 Siccome questo esercizio è composto da 2 tracce, facciamo prima scegliere all'utente
  quale esercizio fare:
2 mettiamo in input la scelta della traccia (1 -> esercizio mail, 2 -> esercizio dadi, 
  altro valore -> arresto dell'esecuzione del programma)

2 ?se vuole fare l'esercizio della mail, allora
    2.1 eseguiamo la 1 traccia
    2.2 creiamo una lista di email di invitati ad una festa
    2.3 inseriamo in input l'email da vedere se ci sta nella lista
    2.4 creiamo una variabile booleana "trovato" che partirà false e 
        ci servirà a vedere se l'input inserito è nella lista
    2.4 creiamo un for che cicli l'array con un counter che parte da 0 e finisce fino a array.lenght-1
        2.4.1 ?se l'input che abbiamo messo prima si trova nella lista, allora
            2.4.2 settiamo trovato true
        fine if
    fine for
    2.5 ?se trovato è true, allora
        2.5.1 scriviamo che è nella lista
    2.6 altrimenti
        2.6.1 scriviamo che non è nella lista

3 altrimenti:
    3.1 eseguiamo la 2 traccia
    3.2 inizializziamo 2 variabili (una per l'utente e l'altro per il bot) e gli diamo come value un valore random da 1 a 6
    3.3 ?se l'utente ha un numero maggiore del bot, allora
        3.4 scriviamo che ha vinto l'utente con "punteggio" contro il bot con "punteggio"
    4.3 ?se l'utente ha un numero minore del bot, allora
        4.4 scriviamo che ha perso l'utente con "punteggio" contro il bot con "punteggio"
    5.3 altrimenti
        3.4 scriviamo che ha pareggiato l'utente con "punteggio" contro il bot con "punteggio"