# Bug Reports

## Bug 1: Checkout Allows Empty Address

| Field | Details |
|---|---|
| Bug ID | BUG_001 |
| Title | Checkout allows order placement with empty address field |
| Module | Checkout |
| Severity | High |
| Priority | High |
| Status | Open |
| Environment | Android 13, Wi-Fi |

### Steps to Reproduce

1. Open DemoShop Mobile App.
2. Login with valid credentials.
3. Add any product to cart.
4. Go to checkout screen.
5. Leave address field empty.
6. Tap Place Order.

### Expected Result

The app should display an address validation message and should not allow order placement.

### Actual Result

The app allows the user to continue without entering an address.

### Impact

User may place an order without a valid delivery address.

---

## Bug 2: Search Result Text Overlaps on Small Screen

| Field | Details |
|---|---|
| Bug ID | BUG_002 |
| Title | Product name overlaps with price on small screen size |
| Module | Search Results |
| Severity | Medium |
| Priority | Medium |
| Status | Open |
| Environment | Android 13, Small screen resolution |

### Steps to Reproduce

1. Open DemoShop Mobile App.
2. Login with valid credentials.
3. Search for Bluetooth Headphones.
4. Observe the product result card on a small screen device.

### Expected Result

Product name and price should be displayed clearly without overlapping.

### Actual Result

Product name overlaps with the price field.

### Impact

The UI becomes difficult to read and affects user experience.

---

## Bug 3: Cart Count Not Updated Immediately

| Field | Details |
|---|---|
| Bug ID | BUG_003 |
| Title | Cart count does not update immediately after adding product |
| Module | Cart |
| Severity | Medium |
| Priority | High |
| Status | Open |
| Environment | Android 13, Wi-Fi |

### Steps to Reproduce

1. Open DemoShop Mobile App.
2. Login with valid credentials.
3. Open a product details page.
4. Tap Add to Cart.
5. Observe the cart icon count.

### Expected Result

Cart count should immediately increase by 1.

### Actual Result

Cart count updates only after refreshing or reopening the cart page.

### Impact

User may think the product was not added to the cart.