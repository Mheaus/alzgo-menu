import React, { useRef } from 'react';

{
  /*const prestashopMock = `
  <div
  class="elementor-element elementor-element-a8c7c5d ce-mobile-valign-center elementor-column elementor-col-33 elementor-top-column"
  data-id="a8c7c5d"
  data-element_type="column"
>
  <div class="elementor-column-wrap elementor-element-populated">
    <div class="elementor-widget-wrap">
      <div
        class="elementor-element elementor-element-9d2b2d4 elementor-cart--show-subtotal-yes elementor-cart--align-icon-left elementor-cart--items-indicator-bubble elementor-cart--show-shipping-yes elementor-cart--show-view-cart-yes elementor-cart--buttons-inline elementor-widget elementor-widget-shopping-cart"
        data-id="9d2b2d4"
        data-element_type="widget"
        data-settings='{"action_show_modal":"yes","modal_url":"https://alzgo.fr/module/creativeelements/ajax","remove_item_icon":{"value":"far fa-circle-xmark","library":"fa-regular"}}'
        data-widget_type="shopping-cart.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-cart__container elementor-lightbox elementor-cart--shown">
            <div class="elementor-cart__main">
              <div class="elementor-cart__close-button ceicon-close"></div>
              <div class="elementor-cart__title"></div>
              <div class="elementor-cart__empty-message">Aucun produit dans le chariot.</div>
              <div class="elementor-cart__products ce-scrollbar--auto" data-gift="Cadeau"></div>
              <div class="elementor-cart__summary">
                <div class="elementor-cart__summary-label">0 articles</div>
                <div class="elementor-cart__summary-value">0,00&nbsp;€</div>
                <span class="elementor-cart__summary-label">Livraison</span>
                <span class="elementor-cart__summary-value"></span>
                <strong class="elementor-cart__summary-label">Total</strong>
                <strong class="elementor-cart__summary-value">0,00&nbsp;€</strong>
              </div>
              <div class="elementor-alert elementor-alert-warning elementor-hidden" role="alert">
                <span class="elementor-alert-description"></span>
              </div>
              <div class="elementor-cart__footer-buttons">
                <div class="elementor-align-justify">
                  <a
                    href="//alzgo.fr/panier?action=show"
                    class="elementor-button elementor-button--view-cart elementor-size-md"
                  >
                    <span class="elementor-button-text">Voir le panier</span>
                  </a>
                </div>
                <div class="elementor-align-justify">
                  <a
                    href="https://alzgo.fr/commande"
                    class="elementor-button elementor-button--checkout elementor-size-md ce-disabled"
                  >
                    <span class="elementor-button-text">Commander</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="elementor-cart__toggle">
            <a href="//alzgo.fr/panier?action=show" class="elementor-button elementor-size-sm">
              <span class="elementor-button-icon" data-counter="0">
                <i aria-hidden="true" class="ceicon-basket-solid"></i> <span class="elementor-screen-only">Panier</span>
              </span>
              <span class="elementor-button-text">0,00&nbsp;€</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
*/
}
interface CartProps {
  isShown: boolean;
  closeCart: () => void;
}

const Cart = ({ isShown, closeCart }: CartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      closeCart();
    }
  };

  // const data = typeof window.prestashop === 'undefined' ? prestashopMock : window.prestashop;
  return (
    <div
      ref={containerRef}
      className={`elementor-cart__container fixed right-0 top-0 z-10 h-full w-80 transform bg-white shadow-lg transition-transform duration-300 ${
        isShown ? 'elementor-cart--shown translate-x-0' : 'elementor-cart-hidden translate-x-full'
      }`}
      onClick={handleClickOutside}
    >
      <div className="elementor-cart__main w-100 m-6 mt-16 flex-col">
        <button
          className="elementor-cart__close-button absolute right-2 top-2 text-gray-500 hover:text-black"
          onClick={closeCart}
        >
          ✖️
        </button>
        <h2 className="elementor-cart__title mb-4 text-xl font-bold">Mon Panier</h2>
        <div className="elementor-cart__summary border-b-[1px] border-t-[1px] border-second_blue border-opacity-30 pb-6 pt-6">
          <p>Contenu du panier ici...</p>
        </div>

        <div className="w-100 mt-6 flex justify-evenly">
          <a className="rounded-full border border-second_blue p-4" href="https://alzgo.fr/panier?action=show">
            <span className="text-second_blue">Voir le panier</span>
          </a>
          <a className="rounded-full bg-second_blue p-4" href="https://alzgo.fr/commande">
            <span className="text-white">Commander</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
