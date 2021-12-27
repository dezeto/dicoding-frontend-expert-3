const assert = require("assert");

Feature("Review Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("should perform correctly when giving a review", async ({ I }) => {
  I.amOnPage("/");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  I.click(firstRestaurant);

  I.seeElement("#review-name");
  I.seeElement("#review-content");
  I.seeElement(".review__submit");

  const randomUser = "E2E testing Adrian";
  const randomData = "testing";

  I.fillField("#review-name", randomUser);
  I.fillField("#review-content", randomData);
  I.click(".review__submit");

  const lastReviewName = locate(".reviews-item__name").first();
  const lastReviewDescription = locate(".reviews-item__content").first();

  console.log(lastReviewName);
  console.log(lastReviewDescription);

  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewContentText = await I.grabTextFrom(lastReviewDescription);
  assert.strictEqual(lastReviewNameText, randomUser);
  assert.strictEqual(lastReviewContentText, randomData);
});
