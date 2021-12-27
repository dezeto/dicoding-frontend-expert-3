import { createReviewItemTemplate } from "../views/templates/template-creator";

const ReviewItemInitiator = {
  async init({ reviewContainer, reviews }) {
    this._reviewContainer = reviewContainer;
    this._reviews = reviews;
    await this._renderReviewItems();
  },

  async _renderReviewItems() {
    this._reviews.forEach((review) => {
      this._reviewContainer.innerHTML += createReviewItemTemplate(review);
    });
  },
};

export default ReviewItemInitiator;
