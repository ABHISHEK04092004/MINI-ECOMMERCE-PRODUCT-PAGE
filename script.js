let cartCount = 0;

document.getElementById("add-to-cart").addEventListener("click", function () {
  const quantity = parseInt(document.getElementById("quantity").value);
  
  if (quantity > 0) {
    cartCount += quantity;
    document.getElementById("cart-count").textContent = cartCount;
    alert("Item added to cart!");
  } else {
    alert("Please enter a valid quantity.");
  }
});
