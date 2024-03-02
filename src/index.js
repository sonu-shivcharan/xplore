
let products;
let modal;
const navbar = document.getElementById("navbar");

console.log(navbar, "navbar");
(function(){
  fetch("./src/product.json")
.then((resp)=>resp.json())
.then((data)=>{
  products = data.products.items;
  renderProdItems(products);
  console.log(data)
  })
.catch((err)=>console.log(err));
})();
function renderProdItems(products){
  const productsContainer = document.getElementById("products-container");
  products.map((item)=>{
    productsContainer.innerHTML+=`<div class="product" onclick='openProduct(${JSON.stringify(item)})'>
    <div class="prod-img" style="background-image:url('${item.img.url}')"></div> 
    <div class="details">
    <h4>${item.name}</h4>
    <p>&#8377;${item.price}</p>
    </div>
    </div>`
    console.log(item);
  });
  productsContainer.innerHTML+=`<button id="show-more-btn">Show More</button>`;
}
function openProduct(item){
  console.log(item);
  const productPanel = document.createElement("div");
  modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  modal.addEventListener("click", closeModal);
  productPanel.setAttribute("id", "product-panel");
  productPanel.innerHTML=`<div>
  <div class="img-container">
    <img src=${item.img.url} alt=${item.name} />
  </div>
  <div class="details">
  <h3>${item.name}</h3>
  <p>Price : &#8377;${item.price}</p>
  </div>
  </div>`;
  modal.appendChild(productPanel);
  document.body.appendChild(modal);
  console.log(modal);
}
function closeModal(e){
  if(e.target.id=="modal"){
    document.body.removeChild(modal);
  }
}


window.onscroll = (()=>handleScroll());
function handleScroll(){
  let scrollTop = document.body.scrollTop;
  if(document.body.scrollTop>150){
    navbar.style.backgroundColor="black";
  }
}
