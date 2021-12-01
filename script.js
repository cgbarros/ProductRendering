var pURL = document.location.href;
// easier code with no regex for training
// var pID = pURL.replace("https://productrendering.elyksorab.repl.co/", "");
// pID = pID.replace(".html", "");
var pID = pURL.match(/.*\/(.*)\.html/)[1]
console.log(pID);

fetch('products.json', { method: "GET" })
	.then(promisse => promisse.json())
	.then(products => {
		product = products[pID];
		document.title = product["Name"];

		document.querySelector("#category").innerText = product["Category"];
		document.querySelector("#name").innerText = product["Name"];
		document.querySelector("#img").src = "/images/" + product["id"] + ".jpg";
		document.querySelector("#price").innerText = product["Price"];
		document.querySelector("#shipping").innerText = product["Shipping"];
		document.querySelector("#price").innerText = product["Price"];
		document.querySelector("#totalPrice").innerText = (product["Shipping"] + product["Price"]).toFixed(2);
		document.querySelector("#rating").innerText = product["Rating"];
		document.querySelector("#totalRates").innerText = product["RatingNum"];
		document.querySelector("#description").innerText = product["Description"];
		document.querySelector("#brand").innerText = product["Brand"];
		document.querySelector("#model").innerText = product["Model"];
		document.querySelector("#color").innerText = product["Color"];
		
	})