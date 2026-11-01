"use strict";

import { notes } from "./objets.js";

export function exo4q1() {
    document.write("Notes : " + notes.join(", ") + "<br>");
    document.write("Première : " + notes[0] + "<br>");
    document.write("Dernière : " + notes[notes.length - 1] + "<br>");
    document.write("Length : " + notes.length);
}

export function exo4q2() {
    notes.push(14);
    notes.pop();
    document.write("Tableau après push puis pop : [" + notes.join(", ") + "]");
}

export function exo4q3() {
    let sommeFor = 0;
    for (let i = 0; i < notes.length; i++) sommeFor += notes[i];
    const moyenneFor = sommeFor / notes.length;

    let sommeOf = 0;
    for (const note of notes) sommeOf += note;
    const moyenneOf = sommeOf / notes.length;

    let sommeEach = 0;
    notes.forEach((note) => { sommeEach += note; });
    const moyenneEach = sommeEach / notes.length;

    const moyenneReduce = notes.reduce((somme, note) => somme + note, 0) / notes.length;
    document.write("Moyenne avec for : " + moyenneFor.toFixed(2) + "<br>");
    document.write("Moyenne avec for...of : " + moyenneOf.toFixed(2) + "<br>");
    document.write("Moyenne avec forEach : " + moyenneEach.toFixed(2) + "<br>");
    document.write("Moyenne avec reduce : " + moyenneReduce.toFixed(2));
}

export function exo4q4() {
    const maximum = notes.reduce((max, note) => Math.max(max, note), notes[0]);
    const minimum = notes.reduce((min, note) => Math.min(min, note), notes[0]);
    document.write("Minimum : " + minimum + "<br>");
    document.write("Maximum : " + maximum);
}
