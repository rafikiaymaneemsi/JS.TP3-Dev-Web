"use strict";

import { etudiants } from "./objets.js";

export function exo5q1() {
    const moyenne = etudiants.map((etudiant) => etudiant.note)
        .reduce((somme, note) => somme + note, 0) / etudiants.length;
    document.write("Moyenne générale : " + moyenne.toFixed(2));
}

export function exo5q2() {
    const meilleur = etudiants.reduce((best, etudiant) =>
        etudiant.note > best.note ? etudiant : best, etudiants[0]);
    document.write(`Meilleure note : ${meilleur.prenom} avec ${meilleur.note}.`);
}

export function exo5q3() {
    etudiants.forEach((etudiant) => {
        if (etudiant.note >= 16) etudiant.mention = "Très bien";
        else if (etudiant.note >= 14) etudiant.mention = "Bien";
        else if (etudiant.note >= 12) etudiant.mention = "Assez bien";
        else etudiant.mention = "Insuffisant";
    });
    const lignes = etudiants.map((etudiant) =>
        `${etudiant.prenom} : ${etudiant.note} - <strong>${etudiant.mention}</strong>`).join("<br>");
    document.write(lignes);
}

export function exo5q4() {
    etudiants.forEach((etudiant) => {
        if (etudiant.note >= 16) etudiant.mention = "Très bien";
        else if (etudiant.note >= 14) etudiant.mention = "Bien";
        else if (etudiant.note >= 12) etudiant.mention = "Assez bien";
        else etudiant.mention = "Insuffisant";
    });
    const admis = etudiants.filter((etudiant) =>
        etudiant.mention === "Bien" || etudiant.mention === "Très bien");
    document.write(admis.map((etudiant) =>
        `${etudiant.prenom} : ${etudiant.note} - ${etudiant.mention}`).join("<br>"));
}
