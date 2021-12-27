import { createRestaurantCategoryTemplate } from "../views/templates/template-creator";

const RestaurantCategoryInitiator = {
  async init({ restaurantCategoryContainer, categories }) {
    this._restaurantCategoryContainer = restaurantCategoryContainer;
    this._categories = categories;
    await this._renderCategories();
  },

  async _renderCategories() {
    this._categories.forEach((category) => {
      this._restaurantCategoryContainer.innerHTML += createRestaurantCategoryTemplate(
        category.name
      );
    });
  },
};

export default RestaurantCategoryInitiator;
