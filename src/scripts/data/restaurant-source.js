import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview({ id, name, review }) {
    const reviewObject = {
      id,
      name,
      review,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(reviewObject),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    console.log(response.json());
    return response;
  }
}

export default RestaurantSource;
