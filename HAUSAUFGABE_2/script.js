
 // Suche das Element mit der Klasse "burger" (das Hamburger-Menü-Symbol)
const burger = document.querySelector(".burger");

// Suche das Navigationselement mit der Klasse "nav-links" (die eigentlichen Menüpunkte)
const nav = document.querySelector(".nav-links");

// Wenn auf das Burger-Menü geklickt wird...
burger.addEventListener("click", () => {
  // ...dann wird bei der Navigation die Klasse "active" hinzugefügt oder entfernt (toggle)
  // Dadurch kann man das Menü ein- und ausblenden (z. B. in mobilen Ansichten)
  nav.classList.toggle("active");
});


