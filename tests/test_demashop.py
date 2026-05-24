from pathlib import Path
from playwright.sync_api import Page, expect


APP_PATH = Path(__file__).resolve().parents[1] / "index.html"
APP_URL = APP_PATH.as_uri()


def login(page: Page):
    page.goto(APP_URL)
    page.locator("#username").fill("testuser@example.com")
    page.locator("#password").fill("Test@123")
    page.locator("#loginBtn").click()


def test_valid_login(page: Page):
    login(page)

    expect(page.locator("#homeScreen")).to_have_class("screen active")
    expect(page.locator("text=Welcome, Test User")).to_be_visible()


def test_invalid_login(page: Page):
    page.goto(APP_URL)

    page.locator("#username").fill("wronguser@example.com")
    page.locator("#password").fill("Wrong@123")
    page.locator("#loginBtn").click()

    expect(page.locator("#loginError")).to_have_text("Invalid username or password.")


def test_product_search_found(page: Page):
    login(page)

    page.locator("#searchInput").fill("Bluetooth Headphones")
    page.locator("#searchBtn").click()

    expect(page.locator("text=Bluetooth Headphones")).to_be_visible()


def test_product_search_not_found(page: Page):
    login(page)

    page.locator("#searchInput").fill("xyzunknown")
    page.locator("#searchBtn").click()

    expect(page.locator("#noResults")).to_have_text("No products found.")


def test_add_and_remove_from_cart(page: Page):
    login(page)

    page.locator("button", has_text="Add to Cart").first.click()

    expect(page.locator("#cartCount")).to_have_text("1")
    expect(page.locator("#cartItems")).to_contain_text("Bluetooth Headphones")

    page.locator("button", has_text="Remove").click()

    expect(page.locator("#cartCount")).to_have_text("0")
    expect(page.locator("#emptyCartMessage")).to_have_text("Cart is empty.")


def test_checkout_without_address(page: Page):
    login(page)

    page.locator("button", has_text="Add to Cart").first.click()
    page.locator("#checkoutBtn").click()

    expect(page.locator("#checkoutMessage")).to_have_text(
        "Address is required before placing order."
    )


def test_checkout_with_valid_address(page: Page):
    login(page)

    page.locator("button", has_text="Add to Cart").first.click()
    page.locator("#addressInput").fill("Regensburg, Germany")
    page.locator("#checkoutBtn").click()

    expect(page.locator("#checkoutMessage")).to_have_text("Order placed successfully.")


def test_mobile_responsive_view(page: Page):
    page.set_viewport_size({"width": 390, "height": 844})

    login(page)

    expect(page.locator(".phone-frame")).to_be_visible()
    expect(page.locator("#homeScreen")).to_have_class("screen active")
    expect(page.locator("#productsTab")).to_be_visible()
    expect(page.locator("#cartTab")).to_be_visible()