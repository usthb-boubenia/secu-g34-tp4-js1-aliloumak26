"use strict"; //ici on utilise le mode stricte vu dans le slide 51

//ici on utilise un tableau vu dans le slide 38
const Etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
//ici on utilise un objet vu dans le slide 39
const Etudiant = {nom: "John", Prenom: "Doe", age: 30 };
//ici on utilise un tableau d'objets vu dans le slide 40
const Tableauobjets = [
    {nom: "nom1", prenom: "prenom1", age: 21}, 
    {nom: "nom2", prenom: "prenom2", age: 22},  
    {nom: "nom3", prenom: "prenom3", age: 23}
];

//ici on utilise les fonctions vu dans le slide 45
function f1() {
    for (let e of Etudiants) {
        //ici on utilise l'affichage dans la console vu dans le slide 33
        console.log(e);
    }
}

//ici on utilise les fonctions vu dans le slide 45
function f2() {
    //ici on utilise l'affichage dans la console vu dans le slide 33
    console.log(Etudiant);
}

//ici on utilise les fonctions vu dans le slide 45
function f3() {
    //ici on utilise une boucle for vu dans le slide 44
    for (let e of Tableauobjets) {
        //ici on utilise l'affichage dans la console vu dans le slide 33
        console.log(e.nom + "-" + e.prenom + "-" + e.age); //ici on utilise l'affichage élaboré vu dans le slide 37
    }
}