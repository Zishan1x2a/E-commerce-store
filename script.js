// script.js
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
];

let cartCount = 0;

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

document.getElementById("checkout").addEventListener("click", () => {
    alert("Proceeding to checkout");
});

// Initialize the product display
displayProducts();
