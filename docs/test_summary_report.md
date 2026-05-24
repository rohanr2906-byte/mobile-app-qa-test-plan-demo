# Test Summary Report

## Project Name

DemoShop Mobile App QA Testing

## Test Objective

The objective was to validate core mobile app functionalities including login, product search, add to cart, checkout, logout, and basic UI behavior.

## Test Execution Summary

| Metric | Count |
|---|---|
| Total Test Cases | 13 |
| Passed | 12 |
| Failed | 1 |
| Blocked | 0 |
| Bugs Reported | 3 |

## Module-wise Test Summary

| Module | Total Test Cases | Passed | Failed |
|---|---|---|---|
| Login | 3 | 3 | 0 |
| Product Search | 3 | 3 | 0 |
| Add to Cart | 3 | 3 | 0 |
| Checkout | 3 | 2 | 1 |
| Logout | 1 | 1 | 0 |

## Defect Summary

| Bug ID | Module | Severity | Status |
|---|---|---|---|
| BUG_001 | Checkout | High | Open |
| BUG_002 | Search Results | Medium | Open |
| BUG_003 | Cart | Medium | Open |

## Final Test Result

The application is functionally stable for login, search, cart, and logout modules. One high-priority issue was identified in the checkout module where the app allows order placement with an empty address field.

## Recommendation

The checkout validation issue should be fixed before release. UI overlap and cart count update issues should be addressed to improve user experience.