"use strict";

import { infos, contact, user } from "./objets.js";

export function exo3q1() {
    const profilAssign = Object.assign({}, infos, contact);
    const profilSpread = { ...infos, ...contact };
    profilAssign.pays = "Maroc";
    profilSpread.pays = "Maroc";

    document.write("Object.assign : " + JSON.stringify(profilAssign) + "<br>");
    document.write("Spread operator : " + JSON.stringify(profilSpread) + "<br>");
    document.write("Les objets infos et contact restent inchangés.");
}

export function exo3q2() {
    user.adresse.ville = "Casablanca";
    const copie1 = Object.assign({}, user);
    const copie2 = structuredClone(user);

    copie1.adresse.ville = "Agadir";

    document.write("user.adresse.ville = " + user.adresse.ville + "<br>");
    document.write("copie1.adresse.ville = " + copie1.adresse.ville + "<br>");
    document.write("copie2.adresse.ville = " + copie2.adresse.ville + "<br><br>");
    document.write("Object.assign() crée une copie superficielle : l’objet adresse est partagé.<br>");
    document.write("structuredClone() crée une copie profonde : adresse est dupliqué indépendamment.");
}
