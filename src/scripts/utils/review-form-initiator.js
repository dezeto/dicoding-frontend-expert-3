import { createReviewFormTemplate } from "../views/templates/template-creator";
import RestaurantSource from "../data/restaurant-source";

const ReviewFormInitiator = {
  async init({ formContainer, restaurantId }) {
    this._formContainer = formContainer;
    this._restaurantId = restaurantId;

    await this._renderForm();
  },

  async _renderForm() {
    this._formContainer.innerHTML = createReviewFormTemplate();

    const form = document.querySelector("#form-review");
    form.addEventListener("submit", async () => {
      const name = document.querySelector("#review-name").value.trim();
      const review = document.querySelector("#review-content").value.trim();
      if (name.length !== 0) {
        await RestaurantSource.postReview({
          id: this._restaurantId,
          name,
          review,
        });
      }
    });
  },

  _renderLike() {},
};

export default ReviewFormInitiator;
