let zutaten = [
  "Huhn",
  "Currypulver",
  "Kokosmilch",
  "Ingwer",
  "Zwiebel",
  "Reis",
  "Zitronensaft",
  "Chili",
];
let mengen = [1, 10, 250, 2, 1, 200, 20, 0.5];
let einheiten = ["Stk.", "g", "ml", "ml", "Stk.", "g", "ml", "g"];

// ===== FUNKTION: Zutatenliste aktualisieren =====
function zutatenAktualisieren(portionen) {
  let liste = document.getElementById("zutaten-liste");
  liste.innerHTML = ""; // alte Liste leeren

  for (let i = 0; i < zutaten.length; i++) {
    let berechneteMenge = mengen[i] * portionen;

    // neue Zeile erstellen
    let zeile = document.createElement("div");
    zeile.classList.add("zutat-zeile");
    zeile.innerHTML =
      "<span>" +
      zutaten[i] +
      "</span><span>" +
      berechneteMenge +
      " " +
      einheiten[i] +
      "</span>";

    liste.appendChild(zeile);
  }
}

// ===== BEIM LADEN: Standardmäßig 1 Portion anzeigen =====
zutatenAktualisieren(1);

// ===== EVENT LISTENER: Eingabefeld =====
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