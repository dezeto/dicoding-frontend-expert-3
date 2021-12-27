const SkipLinkInitiator = {
  async init({ skipLink }) {
    this._skipLink = skipLink;
    this._renderReviewItems();
  },

  async _renderReviewItems() {
    console.timeLog(this._skipLink);
    this._skipLink.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#main-content").focus();
    });
  },
};

export default SkipLinkInitiator;
