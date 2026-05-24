# Functional Test Cases

## Module: Login

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Status |
|---|---|---|---|---|---|
| TC_LOGIN_001 | Verify login with valid credentials | 1. Open app 2. Enter valid username 3. Enter valid password 4. Tap Login | testuser@example.com / Test@123 | User should be redirected to home screen | Passed |
| TC_LOGIN_002 | Verify login with invalid credentials | 1. Open app 2. Enter invalid username/password 3. Tap Login | wronguser@example.com / Wrong@123 | Error message should be displayed | Passed |
| TC_LOGIN_003 | Verify empty login fields | 1. Open app 2. Leave fields empty 3. Tap Login | Empty fields | Validation message should be displayed | Passed |

## Module: Product Search

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Status |
|---|---|---|---|---|---|
| TC_SEARCH_001 | Verify product search with valid keyword | 1. Login 2. Tap search bar 3. Enter product name 4. Tap Search | Bluetooth Headphones | Matching products should be displayed | Passed |
| TC_SEARCH_002 | Verify search with invalid keyword | 1. Login 2. Enter invalid product name 3. Tap Search | xyzunknown | No results message should be displayed | Passed |
| TC_SEARCH_003 | Verify search field with empty input | 1. Login 2. Leave search field empty 3. Tap Search | Empty search | User should see validation or all products list | Passed |

## Module: Add to Cart

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Status |
|---|---|---|---|---|---|
| TC_CART_001 | Verify adding product to cart | 1. Search product 2. Open product details 3. Tap Add to Cart | Bluetooth Headphones | Product should be added to cart | Passed |
| TC_CART_002 | Verify cart item count update | 1. Add product to cart 2. Check cart icon count | 1 product | Cart count should increase by 1 | Passed |
| TC_CART_003 | Verify removing product from cart | 1. Open cart 2. Tap Remove | Added product | Product should be removed from cart | Passed |

## Module: Checkout

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Status |
|---|---|---|---|---|---|
| TC_CHECKOUT_001 | Verify checkout with valid address | 1. Add product to cart 2. Go to checkout 3. Enter address 4. Tap Place Order | Regensburg, Germany | Order confirmation should be displayed | Passed |
| TC_CHECKOUT_002 | Verify checkout with empty address | 1. Add product to cart 2. Go to checkout 3. Leave address empty 4. Tap Place Order | Empty address | Address validation message should be displayed | Failed |
| TC_CHECKOUT_003 | Verify checkout button disabled for empty cart | 1. Open empty cart 2. Check checkout button | Empty cart | Checkout button should be disabled | Passed |

## Module: Logout

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Status |
|---|---|---|---|---|---|
| TC_LOGOUT_001 | Verify logout functionality | 1. Login 2. Open menu 3. Tap Logout | Logged-in user | User should return to login screen | Passed |