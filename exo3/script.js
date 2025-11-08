"use strict";//ici on utilise le mode stricte vu dans le slide 51

//ici on utilise un tableau d'objets vu dans le slide 40
const students = [
        { id: 1000, prenom: "JOHN", nom: "DOE", note1: 14, note2: 5 },
        { id: 2000, prenom: "BOB", nom: "CARLTON", note1: 7, note2: 1 },
        { id: 3000, prenom: "RAYANE", nom: "SMITH", note1: 13, note2: 3 }
    ];

//ici on utilise les fonctions vu dans le slide 45
function A () {
    //ici on utilise une boucle for vu dans le slide 44
    for (let student of students) {
        const moyenne = ( student.note1 + student.note2 ) / 2 + 5 ; //addition et division vu dans le slide 41 
        let status; //ici on déclare une variable vu dans le slide 51
        //ici on utilise les conditions vu dans le slide 42
        if (B(moyenne)) {
            status = "Admis" ; //ici on utilise les chaines de caractères vu dans le slide 37
        }
        else {
            status = "Ajourné" ; //ici on utilise les chaines de caractères vu dans le slide 37
        }
        //ici on utilise l'affichage dans la console vu dans le slide 33
        console.log(`${student.id}: ${status}`); //affichage formaté vu dans le slide 37
    }
}
//ici on utilise les fonctions vu dans le slide 45
function B (moyenne) {
    return moyenne >= 10 ; 
}