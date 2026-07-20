let portionsmenge = parseInt(prompt("Anzahl der Portionen:"), 10);
let zutatenMenge = 200;

if (portionsmenge <= 0) {
    alert("Sie haben eine falsche Portions-Menge eingegeben.");
} else {
    let berechneteMenge = portionsmenge * zutatenMenge;
    console.log("Berechnete Portionsmenge: " + berechneteMenge + " Gramm");
}