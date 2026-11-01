"use strict";

import { etudiant, voiture } from "./objets.js";

export function exo1q1() {
    document.write(etudiant.prenom + "<br>");
    document.write(etudiant.nom + "<br>");
    document.write(etudiant["age"] + "<br>");
    document.write(etudiant["ville"] + "<br>");
}

export function exo1q2() {
    const phrase = etudiant.parler();
    document.write(phrase);
}

export function exo1q3() {
    const texte = `La voiture ${voiture.marque} ${voiture.modele} appartient à ${voiture.proprietaire.nom}, ${voiture.proprietaire.age} ans.`;
    document.write(texte);
}
