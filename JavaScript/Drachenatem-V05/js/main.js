const rezeptDaten = {
  zutaten: [
    { name: "Huhn", menge: 1, einheit: "Stk." },
    { name: "Currypulver", menge: 10, einheit: "g" },
    { name: "Kokosmilch", menge: 250, einheit: "ml" },
    { name: "Ingwer", menge: 2, einheit: "ml" },
    { name: "Zwiebel", menge: 1, einheit: "Stk." },
    { name: "Reis", menge: 200, einheit: "g" },
    { name: "Zitronensaft", menge: 20, einheit: "ml" },
    { name: "Chili", menge: 0.5, einheit: "g" },
  ],
};

function zutatenAktualisieren(portionen) {
  let liste = document.getElementById("zutaten-liste");
  liste.innerHTML = ""; // alte Liste leeren

  for (let i = 0; i < rezeptDaten.zutaten.length; i++) {
    let zutat = rezeptDaten.zutaten[i];
    let berechneteMenge = zutat.menge * portionen;

    // neue Zeile erstellen
    let zeile = document.createElement("div");
    zeile.classList.add("zutat-zeile");
    zeile.innerHTML =
      "<span>" +
      zutat.name +
      "</span><span>" +
      berechneteMenge +
      " " +
      zutat.einheit +
      "</span>";

    liste.appendChild(zeile);
  }
}

zutatenAktualisieren(1);

let portionenInput = document.getElementById("portionen-input");

portionenInput.addEventListener("change", function () {
  let portionen = parseInt(portionenInput.value, 10);

  if (portionen <= 0) {
    alert("Bitte eine gültige Portionsmenge eingeben!");
    portionenInput.value = 1;
    zutatenAktualisieren(1);
  } else {
    zutatenAktualisieren(portionen);
  }
});

// ===== POPUP =====
let infoBtn = document.getElementById("info-btn");
let schliessenBtn = document.getElementById("schliessen-btn");
let overlay = document.getElementById("overlay");

infoBtn.addEventListener("click", function () {
  overlay.classList.toggle("sichtbar");
});

schliessenBtn.addEventListener("click", function () {
  overlay.classList.toggle("sichtbar");
});
