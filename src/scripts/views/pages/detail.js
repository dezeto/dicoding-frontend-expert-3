import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import RestaurantCategoryInitiator from "../../utils/category-item-initiator";
import MenuItemInitiator from "../../utils/menu-item-initiator";
import ReviewItemInitiator from "../../utils/review-item-initiator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import ReviewFormInitiator from "../../utils/review-form-initiator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="detail-page"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    RestaurantCategoryInitiator.init({
      restaurantCategoryContainer: document.querySelector("#restaurant-category"),
      categories: restaurant.categories,
    });

    const { menus } = restaurant;
    // foods
    MenuItemInitiator.init({
      menuContainer: document.querySelector("#menu-foods-list"),
      menus: menus.foods,
    });

    // drinks
    MenuItemInitiator.init({
      menuContainer: document.querySelector("#menu-drinks-list"),
      menus: menus.drinks,
    });

    ReviewFormInitiator.init({
      formContainer: document.querySelector("#form-review"),
      restaurantId: restaurant.id,
    });

    const reviews = restaurant.customerReviews.reverse();
    console.log(reviews);

    ReviewItemInitiator.init({
      reviewContainer: document.querySelector("#restaurant-reviews"),
      reviews,
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },
};

export default Detail;
