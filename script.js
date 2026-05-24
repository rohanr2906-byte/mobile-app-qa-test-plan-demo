const validUsername = "testuser@example.com";
const validPassword = "Test@123";

const products = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    price: "€49.99",
    description: "Wireless headphones with clear audio quality"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "€89.99",
    description: "Fitness tracking smartwatch with touch display"
  },
  {
    id: 3,
    name: "USB Cable",
    price: "€9.99",
    description: "Fast charging USB cable"
  }
];

let cart = [];

const loginScreen = document.getElementById("loginScreen");
const homeScreen = document.getElementById("homeScreen");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");

const logoutBtn = document.getElementById("logoutBtn");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const productList = document.getElementById("productList");
const noResults = document.getElementById("noResults");

const productsTab = document.getElementById("productsTab");
const cartTab = document.getElementById("cartTab");

const productsSection = document.getElementById("productsSection");
const cartSection = document.getElementById("cartSection");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const emptyCartMessage = document.getElementById("emptyCartMessage");

const addressInput = document.getElementById("addressInput");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutMessage = document.getElementById("checkoutMessage");

function showScreen(screenName) {
  loginScreen.classList.remove("active");
  homeScreen.classList.remove("active");

  if (screenName === "login") {
    loginScreen.classList.add("active");
  } else {
    homeScreen.classList.add("active");
  }
}

function showSection(sectionName) {
  productsSection.classList.remove("active-section");
  cartSection.classList.remove("active-section");

  productsTab.classList.remove("active-tab");
  cartTab.classList.remove("active-tab");

  if (sectionName === "products") {
    productsSection.classList.add("active-section");
    productsTab.classList.add("active-tab");
  } else {
    cartSection.classList.add("active-section");
    cartTab.classList.add("active-tab");
  }
}

function renderProducts(productArray) {
  productList.innerHTML = "";
  noResults.textContent = "";

  if (productArray.length === 0) {
    noResults.textContent = "No products found.";
    return;
  }

  productArray.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <br><br>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

function addToCart(productId) {
  const selectedProduct = products.find((product) => product.id === productId);

  if (selectedProduct) {
    cart.push(selectedProduct);
    updateCart();
    showSection("cart");
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
    return;
  }

  emptyCartMessage.style.display = "none";

  cart.forEach((item, index) => {
    const cartCard = document.createElement("div");
    cartCard.className = "cart-card";

    cartCard.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartItems.appendChild(cartCard);
  });
}

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === validUsername && password === validPassword) {
    loginError.textContent = "";
    showScreen("home");
    renderProducts(products);
  } else {
    loginError.textContent = "Invalid username or password.";
  }
});

logoutBtn.addEventListener("click", () => {
  usernameInput.value = "";
  passwordInput.value = "";
  searchInput.value = "";
  addressInput.value = "";
  checkoutMessage.textContent = "";
  cart = [];
  updateCart();
  showScreen("login");
});

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );

  renderProducts(filteredProducts);
});

productsTab.addEventListener("click", () => {
  showSection("products");
});

cartTab.addEventListener("click", () => {
  showSection("cart");
});

checkoutBtn.addEventListener("click", () => {
  checkoutMessage.className = "";

  if (cart.length === 0) {
    checkoutMessage.textContent = "Cart is empty. Please add a product first.";
    checkoutMessage.classList.add("error");
    return;
  }

  if (addressInput.value.trim() === "") {
    checkoutMessage.textContent = "Address is required before placing order.";
    checkoutMessage.classList.add("error");
    return;
  }

  checkoutMessage.textContent = "Order placed successfully.";
  checkoutMessage.classList.add("success");

  cart = [];
  updateCart();
});

renderProducts(products);