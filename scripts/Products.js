import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
  let html = `<ul>`;

  for (const product of products) {
    html += `<li data-type="product" data-id="${product.id}">${product.name}</li>`;
  }

  html += `</ul>`;

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const productClick = clickEvent.target;
  if (productClick.dataset.type === "product") {
    for (const product of products) {
      if (product.id === parseInt(productClick.dataset.id)) {
        window.alert(`${product.name} costs ${product.price}`);
      }
    }
  }
});
