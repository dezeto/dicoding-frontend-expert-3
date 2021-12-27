import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked restaurant</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants && restaurants !== undefined && restaurants.length !== 0) {
      this._renderData({ restaurants });
    } else {
      this._renderNoData();
    }
  },

  _renderData({ restaurants }) {
    console.log(restaurants);
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

  _renderNoData() {
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurantsContainer.innerHTML = `
      <section class="no-favorite-restaurant">
        <div class="favorite-restaurant__not__found">There are no favorite restaurant!</div>
      </section>
    `;
  },
};

export default Favorite;
