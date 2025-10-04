// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// setTimeout(() =>{
//     console.log("hello")
// },5500)
// console.log('5')
// console.log('6')
// console.log('7')
// console.log('8')
// let products = fetch()
// console.log(products)
// async function productdata (){
//     let products = await fetch("https://fakestoreapi.com/products")
//     let data = await products.json()
//     console.log(data)
// }
// productdata();
async function productdata() {
  let products = await fetch("https://fakestoreapi.com/products");
  let data = await products.json();

  const container = document.getElementById("product-list");
  container.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.image}" alt="${product.title}" />
      <p><strong>₹${product.price}</strong></p>
      <p>${product.description}</p>
    `;
    container.appendChild(card);
  });
}

productdata();