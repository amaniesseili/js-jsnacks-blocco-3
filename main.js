/*Snack 1
Crea un array vuoto -------> array[]
e chiedi all’utente un numero da inserire nell’array. --------> prompt
Continua a chiedere i numeri all’utente e a inserirli nell’array -------> const inputnumber -----> conversione dell input in un numero intero tramite parseInt(input)
fino a quando la somma degli elementi è minore di 50. --------> while(la somma < 50)... ( + let sum ) + if..*/ 


const array= [ ];
// const inputNumber = prompt("Inserici un numero da inserire nell'array : ");
let sum = 0; 



while ( sum < 50){
    const inputNumber = prompt("Inserici un numero da inserire nell'array : ");
    const num = parseInt(inputNumber);

    if (! isNaN(num)){    // 1- verifica se l'input è un numero valido allora 
        array.push(num);  // 2- continua a pushare i numeri finchè  

        sum += num;       // 3- la somma dei num>50 

    } else{
        alert("Inserisci un numero valido.")  // 4-altirmenti se l'input nn è un numero valido ----> alert messaggio errore l'input nn e un numero
    }
}

console.log (array)
console.log (sum)


//----------------- esercizio 2 ----------------------------------------
/*Snack 2
Crea due tag div con due id diversi. ----> html <div> con id 
Un div avrà il testo colorato di rosso----> #rosso
mentre l’altro di verde.   ---------------> #verdde
Partendo da un array di numeri,----------> array numeri[1,2,3...]
stampiamo nell’id rosso i numeri dispari
e in verde i numeri pari.*/


const arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //1-creo un array di numeri 
const divRosso = document.getElementById ("rosso")   //2- recupero l'elemento div con id rosso 
const divVerde = document.getElementById ("verde")   //3- recupero l'ele.... 







