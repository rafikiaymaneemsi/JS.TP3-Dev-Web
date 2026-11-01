"use strict";

import { etudiants } from "./objets.js";

export function exo6q1() {
    const filtres = etudiants.filter((etudiant) => etudiant.note >= 12);
    document.write(filtres.map((etudiant) => `${etudiant.prenom} : ${etudiant.note}`).join("<br>"));
}

export function exo6q2() {
    const prenoms = etudiants
        .filter((etudiant) => etudiant.note >= 12)
        .map((etudiant) => etudiant.prenom.toUpperCase());
    document.write(prenoms.join(", "));
}

export function exo6q3() {
    const triDecroissant = etudiants
        .map((etudiant) => ({ ...etudiant }))
        .sort((a, b) => b.note - a.note);
    document.write(triDecroissant.map((etudiant) =>
        `${etudiant.prenom} : ${etudiant.note}`).join("<br>"));
}

export function exo6q4() {
    const trouve = etudiants.find((etudiant) => etudiant.note === 12);
    document.write(trouve
        ? `${trouve.prenom} a exactement la note <strong>${trouve.note}</strong>.`
        : "Aucun étudiant n’a exactement la note 12.");
}
