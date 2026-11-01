"use strict";

import { etudiant } from "./objets.js";

export function exo2q1() {
    const ageExiste = "age" in etudiant;
    etudiant.note = 15;
    etudiant.ville = "Rabat";
    delete etudiant.note;

    document.write(`La propriété "age" existe : ${ageExiste}<br>`);
    document.write(`Ville modifiée : ${etudiant.ville}<br>`);
    document.write("La propriété note a été supprimée.<br>");
}

export function exo2q2() {
    for (const propriete in etudiant) {
        document.write(`${propriete} : ${etudiant[propriete]}<br>`);
    }
}

export function exo2q3() {
    let lignes = "";
    for (const propriete in etudiant) {
        if (Object.prototype.hasOwnProperty.call(etudiant, propriete)) {
            lignes += `${propriete} : ${etudiant[propriete]}<br>`;
        }
    }
    document.write(lignes);
}
