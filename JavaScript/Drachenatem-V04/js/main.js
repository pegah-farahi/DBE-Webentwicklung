let portionsmenge = parseInt(prompt("Anzahl der Portionen:"), 10);
let zutatenMenge = 200;

if (portionsmenge <= 0) {
    alert("Sie haben eine falsche Portions-Menge eingegeben.");
} else {
    let berechneteMenge = portionsmenge * zutatenMenge;
    console.log("Berechnete Portionsmenge: " + berechneteMenge + " Gramm");
}


let zutaten  = ["Huhn", "Currypulver", "Kokosmilch", "Ingwer", "Zwiebel", "Reis", "Zitronensaft", "Chili"];
let mengen   = [1,      10,            250,           2,        1,         200,    20,              0.5];
let einheiten = ["Stk.", "g",          "ml",          "ml",     "Stk.",    "g",    "ml",            "g"];


console.log(zutaten[0]);   // Huhn
console.log(mengen[0]);    // 1
console.log(einheiten[0]); // Stk.