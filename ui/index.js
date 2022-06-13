const productList = `
<div class="product">
  <div class="title">headphones</div>
  <div class="price">400</div>
  <div class="image">image here
    <img src="">
  </div>
  <button>add to cart</button>
</div>
`;

const store = document.getElementsByClassName("store");
store.insertAdjacentElement("afterbegin", productList);
