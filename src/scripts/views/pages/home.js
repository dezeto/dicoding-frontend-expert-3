import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-image">
          <picture>
            <source media="(max-width: 600px)" srcset="/images/heros/hero-image_1-small.jpg" class="hero-image__content">
            <img 
                class="hero-image__content"
                src='/images/heros/hero-image_1-large.jpg' 
                alt="chef"></img>
          </picture>
        </div>
        <div class="hero__inner">
          <p class="hero__title">The Biggest F&B Company on Indonesia</p>
          <p class="hero__tagline">Since 2021</p>
        </div>
      </div>
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
