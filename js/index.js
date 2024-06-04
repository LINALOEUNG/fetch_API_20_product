import { CardComponetjson } from "../components/CardComnetjson.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
// product
//   .slice(0, 10)
//   .map((product) => (renderArea.innerHTML += CardComponet(product)));
const  Base_Url = "http://127.0.0.1:5500/data/productjson.json"
// fetch (Base_Url)
//    .then ((res) =>res.json())
//    .then((data) => {let productjson = data; productjson.map ((productjson) =>( renderArea.innerHTML+=CardComponetjson(productjson)))});
fetch(Base_Url)
  .then((res) => res.json())
  .then((data) => {
  let productjson = data;
  productjson.map((productjson) => (renderArea.innerHTML += CardComponetjson(productjson)))
}
);
