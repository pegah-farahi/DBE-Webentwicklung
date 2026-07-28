const API_URL = "https://storage01.dbe.academy/fswd/api-smoothie-mixer/";

const form = document.querySelector("#smoothie-form");
const input = document.querySelector("#smoothie-name");
const button = form.querySelector("button");
const status = document.querySelector("#status");
const card = document.querySelector("#smoothie-card");
const title = document.querySelector("#smoothie-title");
const image = document.querySelector("#smoothie-image");
const flavour = document.querySelector("#smoothie-flavour");
const ingredients = document.querySelector("#ingredients");

window.addEventListener("DOMContentLoaded", function () {
  var gespeicherterName = localStorage.getItem("letzterSmoothieName");
  var gespeicherterSmoothie = localStorage.getItem("letzterSmoothie");

  if (gespeicherterName) {
    input.value = gespeicherterName;
  }

  if (gespeicherterSmoothie) {
    var smoothieObjekt = JSON.parse(gespeicherterSmoothie);

    renderSmoothie(smoothieObjekt, gespeicherterName);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const smoothieName = input.value.trim();
  if (!smoothieName) return;

  setLoading(true);
  card.hidden = true;
  status.className = "status";
  status.textContent = "Dein Smoothie wird gemixt …";

  try {
    const url = `${API_URL}?smoothiename=${encodeURIComponent(smoothieName)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const smoothie = await response.json();
    console.log("Smoothie-API Antwort:", smoothie);
    renderSmoothie(smoothie, smoothieName);
    status.textContent = "";
  } catch (error) {
    console.error("Smoothie konnte nicht geladen werden:", error);
    status.classList.add("error");
    status.textContent =
      "Der Smoothie konnte gerade nicht geladen werden. Bitte versuche es erneut.";
  } finally {
    setLoading(false);
  }
});

function renderSmoothie(data, requestedName) {
  const smoothie = Array.isArray(data)
    ? data[0]
    : (data.smoothie ?? data.data ?? data);
  const smoothieTitle =
    smoothie.name ??
    smoothie.smoothieName ??
    smoothie.smoothiename ??
    requestedName;
  const smoothieImage =
    smoothie.image ??
    smoothie.imageUrl ??
    smoothie.imageURL ??
    smoothie.bild ??
    smoothie.picture;
  const smoothieFlavour =
    smoothie.flavour ??
    smoothie.flavor ??
    smoothie.taste ??
    smoothie.geschmack ??
    smoothie.geschmacksrichtung ??
    "Lecker & erfrischend";
  const smoothieIngredients = smoothie.ingredients ?? smoothie.zutaten ?? [];

  title.textContent = smoothieTitle;
  image.src = smoothieImage ?? "";
  image.alt = smoothieImage ? `Abbildung von ${smoothieTitle}` : "";
  image.hidden = !smoothieImage;
  flavour.textContent = smoothieFlavour;
  ingredients.replaceChildren(
    ...(Array.isArray(smoothieIngredients)
      ? smoothieIngredients
      : [smoothieIngredients]
    ).map((ingredient) => {
      const item = document.createElement("li");
      item.textContent =
        typeof ingredient === "object"
          ? (ingredient.name ??
            ingredient.ingredient ??
            JSON.stringify(ingredient))
          : ingredient;
      return item;
    }),
  );
  card.hidden = false;
}

localStorage.setItem("letzterSmoothieName", smoothieName);
localStorage.setItem("letzterSmoothie", JSON.stringify(smoothie));

function setLoading(isLoading) {
  button.disabled = isLoading;
  button.textContent = isLoading ? "Wird gemixt …" : "Smoothie generieren";
}
