import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-page__header">
<div class="detail-page__thumbnail">
  <img
    src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
    alt="${restaurant.name}"
    class="detail-page__thumbnail-image"
  />
  <div class="detail-page__rating">
    <i class="fas fa-star"></i>
    <p class="detail-page__rating-value">${restaurant.rating}</p>
  </div>
</div>
<div class="detail-page__information">
  <h2 class="detail-page__name">
    ${restaurant.name}
  </h2>
  <div class="detail-page__location">
    <span>
      <i class="fas fa-map-marker-alt"></i>
    </span>
    <span> ${restaurant.address}</span>
    <span> • </span>
    <span> ${restaurant.city} </span>
  </div>
  <div class="detail-page__description">
    ${restaurant.description}
  </div>
  <div class="detail-page__category" id="restaurant-category">    
  </div>
</div>
</div>
<div class="detail-page__menu">
  <div class="menu__item">
    <h3 class="menu__item-title">Foods</h3>
    <ul class="menu__item-list" id="menu-foods-list">
    </ul>
  </div>
  <div class="menu__item">
    <h3 class="menu__item-title">Drinks</h3>
    <ul class="menu__item-list" id="menu-drinks-list">
      
    </ul>
  </div>
</div>
<div class="detail-page__reviews">
  <p class="detail-page__reviews-title">Reviews</p>
  <form action="" id="form-review" class="review-form__container">
        
  </form>
  <div class="detail-page__reviews-list" id="restaurant-reviews">
    
  </div>
</div>
`;

const createMenuItemTemplate = (menu) => `<li class="menu__item-list__item">${menu}</li>`;

const createReviewItemTemplate = (review) => `
<div class="reviews-item">
  <div class="reviews-item__header">
    <div class="reviews-item__name">${review.name}</div>
    <div class="reviews-item__date">${review.date}</div>
  </div>
  <div class="reviews-item__content">
    ${review.review}
  </div>
</div>`;

const createReviewFormTemplate = () => `
  <label for="review-name" class="review__label">Name</label>
  <input type="text" name="review-name" id="review-name" placeholder="e.g.Adrian" class="review__input"/>

  <label for="review-content" class="review__label">Description</label>
  <textarea
    class="review__input
    name="review-content"
    id="review-content"
    placeholder="e.g. So delicious"
    cols="30"
    rows="10"
  ></textarea>

  <button type="submit" class="review__submit">Submit</button>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
    <div class="restaurant-item__image">
    <p class="restaurant-item__city">Kota ${restaurant.city}</p>
    <img
        class="lazyload restaurant-item__thumbnail"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name}"
    />
    </div>
    <div class="restaurant-item__content">
    <div class="restaurant-item__header">
        <div class="restaurant-item__title">
          <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-item__title-link">
            ${restaurant.name}</a>
        </div>
        <div class="restaurant-item__rating">
            <i class="fas fa-star"></i>
            <p class="restaurant-item__rating-score">${restaurant.rating}</p>
        </div>
    </div>
    <p class="restaurant-item__description">
        ${restaurant.description}
    </p>
    </div>
</article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantCategoryTemplate = (category) => `
    <div class="detail-page__category-item">${category}</div>`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantCategoryTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createMenuItemTemplate,
  createReviewItemTemplate,
  createReviewFormTemplate,
};
