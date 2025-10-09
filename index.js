let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if(method == "GET" && resource == "products"){
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
}

if(method == 'GET' && resource.startsWith('products/')){
let id = resource.split("/")[1];
id = parseInt(id);

if(isNaN(id) || id <= 0){
    console.log("No valido");
}

fetch('https://fakestoreapi.com/products/' + id)
  .then(response => response.json())
  .then(data => console.log(data));

}