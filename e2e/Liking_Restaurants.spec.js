const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurant", ({ I }) => {
  I.seeElement(".restaurants");
  I.see("There are no favorite restaurant!", ".favorite-restaurant__not__found");
});

Scenario("liking and dislike one restaurant", async ({ I }) => {
  I.see("There are no favorite restaurant!", ".favorite-restaurant__not__found");

  I.amOnPage("/");

  // like
  const firstRestaurant = locate(".restaurant-item__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant-item__title");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // dislike
  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");

  I.click(firstRestaurant);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.dontSeeElement(".restaurant-item");
  I.see("There are no favorite restaurant!", ".favorite-restaurant__not__found");
});
