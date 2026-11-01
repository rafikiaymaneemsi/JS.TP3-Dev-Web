"use strict";

export const etudiant = {
    prenom: "Sara",
    nom: "Benali",
    age: 22,
    ville: "Casablanca",
    parler() {
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}.`;
    }
};

export const voiture = {
    marque: "Tesla",
    modele: "Model 3",
    annee: 2024,
    proprietaire: {
        nom: "Anass",
        age: 23
    }
};
