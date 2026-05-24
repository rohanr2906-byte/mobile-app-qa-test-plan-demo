# DemoShop Mobile QA Testing Project

This project contains a working mock mobile shopping web app, manual QA documentation, automated UI tests using Playwright, responsive viewport testing, screenshots, and an HTML test report.

## Project Objective

The objective of this project is to demonstrate mobile app QA testing skills through a realistic mock application, functional test cases, bug report examples, reproduction steps, expected vs actual results, screenshot evidence, automated UI testing, and a structured test summary report.

## Application Features

- Valid login
- Invalid login validation
- Product search
- No result search validation
- Add to cart
- Remove from cart
- Checkout validation
- Order confirmation
- Logout functionality
- Mobile-style responsive UI

## Test Login

| Field | Value |
|---|---|
| Username | testuser@example.com |
| Password | Test@123 |

## Tools Used

- HTML
- CSS
- JavaScript
- Manual Testing
- Functional Testing
- Mobile QA Testing
- Bug Reporting
- Test Summary Reporting
- Python
- Playwright
- pytest
- pytest-html
- GitHub Documentation

## Project Structure

```text
mobile-app-qa-test-plan-demo
│
├── index.html
├── style.css
├── script.js
├── README.md
├── pytest.ini
│
├── tests
│   └── test_demashop.py
│
├── reports
│   └── playwright_test_report.html
│
├── docs
│   ├── test_plan.md
│   ├── test_cases.md
│   ├── bug_reports.md
│   └── test_summary_report.md
│
└── screenshots
    ├── login_screen.png
    ├── wrong_login.png
    ├── home_screen.png
    ├── product_not_found.png
    ├── cart_screen.png
    ├── remove_from_cart.png
    ├── checkout_validation.png
    └── order_success.png
```

## Application Screenshots

### Login Screen
![Login Screen](screenshots/login_screen.png)

### Wrong Login Validation
![Wrong Login](screenshots/wrong_login.png)

### Home / Product Screen
![Home Screen](screenshots/home_screen.png)

### Product Not Found
![Product Not Found](screenshots/product_not_found.png)

### Cart Screen
![Cart Screen](screenshots/cart_screen.png)

### Remove from Cart
![Remove from Cart](screenshots/remove_from_cart.png)

### Checkout Validation
![Checkout Validation](screenshots/checkout_validation.png)

### Order Success
![Order Success](screenshots/order_success.png)

## QA Documentation

- Test Plan: `docs/test_plan.md`
- Test Cases: `docs/test_cases.md`
- Bug Report Examples: `docs/bug_reports.md`
- Test Summary Report: `docs/test_summary_report.md`

## Manual Test Scope

The following workflows were tested manually:

- Login with valid credentials
- Login with invalid credentials
- Product search with valid keyword
- Product search with unavailable product
- Add product to cart
- Remove product from cart
- Checkout without address
- Checkout with valid address
- Logout functionality

## Automated UI Testing

This project includes automated UI tests using Python, Playwright, and pytest.

### Automated Test Coverage

- Valid login
- Invalid login validation
- Product search with valid keyword
- Product search with unavailable product
- Add to cart
- Remove from cart
- Checkout without address
- Checkout with valid address
- Mobile responsive view validation

### Run Automated Tests

Create and activate virtual environment:

```bash
py -m venv .venv
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install pytest pytest-playwright pytest-html
python -m playwright install
```

Run all automated tests:

```bash
python -m pytest
```

Run tests with visible browser:

```bash
python -m pytest --headed --slowmo 500
```

Run responsive mobile tests:

```bash
python -m pytest --device="iPhone 13"
```

Generate HTML automation report:

```bash
python -m pytest --html=reports/playwright_test_report.html --self-contained-html
```

## Test Report

The Playwright HTML test report is saved inside:

```text
reports/playwright_test_report.html
```

## How to Run the Web App

Open `index.html` in a browser.

For best experience, use browser responsive mode or mobile screen size.

## GitHub Pages

Live Demo: https://rohanr2906-byte.github.io/mobile-app-qa-test-plan-demo/

## Project Outcome

This project demonstrates mobile QA testing fundamentals, including test planning, functional test case design, bug reporting, reproduction steps, expected vs actual result documentation, screenshot evidence, automated UI testing using Playwright, responsive viewport testing, HTML test reporting, and structured test summary reporting using a working mock mobile web application.

## Future Improvements

- Add more mobile viewport test cases
- Add cross-browser testing using Chromium, Firefox, and WebKit
- Add CI test execution using GitHub Actions
- Add backend API integration