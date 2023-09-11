const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

// Hometask --- refactoring  ---- decomposition

async function getAllProducts() {
  const response = await fetchAllProducts();
  const prouducts = response.products;
  
  console.log(prouducts, "prouducts");

  const productsTamplate = `<section class="product-item">
  <div class="image-wrapper">
    <img
      src="${prouducts[1].images[0]}"
      alt=""
      class="image"
    />
  </div>
  <div class="content-wrapper">
    <div class="title">
      <h4> ${prouducts[1].brand}</h4>
    </div>
    <div class="price">
      $ ${prouducts[1].price}
      <span class="discount">'$ ${prouducts[1].discountPercentage}</span> 
    </div>

    <div class="description">${prouducts[1].description}</div>
    <div class="actions">
      <button id="cart"class="button green-solid cart">
          Add to Cart
      </button>
      <button class="button more">More Details</button>
    </div>
  </div>
</section>`;
document.body.innerHTML = productsTamplate
}

getAllProducts();
