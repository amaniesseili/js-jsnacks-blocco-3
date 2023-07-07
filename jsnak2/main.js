//----------------- esercizio 2 ----------------------------------------
/*Snack 2
Crea due tag div con due id diversi. ----> html <div> con id 
Un div avrà il testo colorato di rosso----> #rosso
mentre l’altro di verde.   ---------------> #verdde
Partendo da un array di numeri,----------> array numeri[1,2,3...]
stampiamo nell’id rosso i numeri dispari --->( devo creare un variabile che recupera i numeri per poter fare il ciclo)
e in verde i numeri pari.*/


const arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //1-creo un array di numeri 
const divRosso = document.getElementById ("rosso")   //2- recupero l'elemento div con id rosso 
const divVerde = document.getElementById ("verde")   //3- recupero l'ele.... 


let i = 0  
while (i < arrayNumeri.length) {
    if(arrayNumeri[i] % 2 === 0 ) {                 // il modulo dei numero pari
    divVerde.innerHTML += arrayNumeri[i] + " ";   // 1-aggiungo i numeri pari al div verde

    }  else {
        divRosso.innerHTML += arrayNumeri[i] + " ";
} 
    i++ ;
}

