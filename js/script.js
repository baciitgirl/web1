

 const products  = [
    {name:"Laptop", price:699},
    {name:"Handy", price:300},
    {name:"Tablett", price:200}

 ]

//  console.log(products[0].name);
//   console.log(products[0].price);

//   products.forEach(function(product){
//     console.log(product.name + ": € " + product.price);
//   });

const productList = document.getElementById("productList");
products.forEach((product)=> {
  //list element erstellen
  const listItem = document.createElement("li");
  //inhalte mit daten befüllen
  listItem.innerHTML = product.name + " - " + product.price + " EUR";

  //Item zu LeistItem hinzufügen
  productList.appendChild(listItem);
})


const search = document.getElementById("searchInput");
search.addEventListener("input", function (event){
  const userInput = event.target.value.toLoweerCase();
});

  const filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(userInput);
  });

  //Liste leeren damit nicht alles immer wieder ausgegeben wird 

  productList.innerHTML ="";

  


fetch('https://dummyjson.com/products')
 .then(response => {
 console.log('Response erhalten:', response);
 return response.json(); // Wandelt zu JSON um
 })
 .then(data => {
 console.log('JSON-Daten:', data);
 // Hier arbeiten wir mit den JSON Daten
 })
 .catch(error => {
 console.error('Etwas ist schiefgelaufen:', error);
 });
  

 //neue Version API Daten

 let allProducts = []; // Globale Variable für alle Produkte
function loadProducts() {
 fetch('https://dummyjson.com/products?limit=20')
 .then(response => response.json())
 .then(data => {
 allProducts = data.products;
 showProducts(allProducts); // Alle Produkte anzeigen
 })
 .catch(error => {
 console.error('Fehler beim Laden der Produkte:', error);
 showError('Produkte konnten nicht geladen werden.');
 });
}


loadProducts();


// Produkte von API laden
function loadProducts() {
 showLoading(true);
 hideError();

 fetch('https://dummyjson.com/products?limit=20')
 .then(response => {
 if (!response.ok) {
 throw new Error('Netzwerk-Fehler: ' + response.status);
 }
 return response.json();
 })
 .then(data => {
 allProducts = data.products;
 showProducts(allProducts);
 showLoading(false);
 })
 .catch(error => {
 console.error('Fehler:', error);
 showError('Fehler beim Laden der Produkte: ' + error.message);
 showLoading(false);
 });
}


