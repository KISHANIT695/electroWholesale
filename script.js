let products = [
  {name: "LED Bulb", price: 50, sales: 120},
  {name: "Switch Board", price: 80, sales: 90}
];

function showProducts() {
  let html = "";
  products.forEach(p => {
    html += `<div class="card">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>Sales: ${p.sales}</p>
    </div>`;
  });
  document.getElementById("products").innerHTML = html;
}

function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  products.push({name, price, sales: 0});
  alert("Product Added!");
  showAnalytics();
}

function showAnalytics() {
  let top = products.sort((a,b)=>b.sales-a.sales)[0];
  document.getElementById("analytics").innerHTML =
    "Top Product: " + top.name + " (" + top.sales + " sales)";
}

function changeLang() {
  let title = document.getElementById("title");
  title.innerText = title.innerText === "Top Products" ? "शीर्ष उत्पाद" : "Top Products";
}

if (document.getElementById("products")) showProducts();
if (document.getElementById("analytics")) showAnalytics();
