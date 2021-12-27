import { createMenuItemTemplate } from "../views/templates/template-creator";

const MenuItemInitiator = {
  async init({ menuContainer, menus }) {
    this._menuContainer = menuContainer;
    this._menus = menus;
    await this._renderMenuItems();
  },

  async _renderMenuItems() {
    this._menus.forEach((menu) => {
      this._menuContainer.innerHTML += createMenuItemTemplate(menu.name);
    });
  },
};

export default MenuItemInitiator;
