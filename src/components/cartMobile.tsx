import $ from 'jquery';

export class CartMobile {
  settings: {
    selectors: {
      container: string;
      toggle: string;
      closeButton: string;
    };
    classes: {
      isShown: string;
      lightbox: string;
      isHidden: string;
    };
  };

  elements: {
    $container: JQuery;
    $toggle: JQuery;
    $closeButton: JQuery;
  };

  $element: JQuery;

  constructor($element: JQuery) {
    this.$element = $element;
    this.settings = this.getDefaultSettings();
    this.elements = this.getDefaultElements();
  }

  getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-cart__container',
        toggle: '.elementor-cart__toggle',
        closeButton: '.elementor-cart__close-button',
      },
      classes: {
        isShown: 'elementor-cart--shown',
        lightbox: 'elementor-lightbox',
        isHidden: 'elementor-cart-hidden',
      },
    };
  }

  getDefaultElements() {
    const selectors = this.settings.selectors;
    return {
      $container: this.$element.find(selectors.container),
      $toggle: this.$element.find(selectors.toggle),
      $closeButton: this.$element.find(selectors.closeButton),
    };
  }

  bindEvents(): void {
    const classes = this.settings.classes;
    const { $container, $toggle, $closeButton } = this.elements;

    // open cart
    $toggle.on('click', (event: JQuery.ClickEvent) => {
      if (!$toggle.hasClass(classes.isHidden)) {
        event.preventDefault();
        $container.toggleClass(classes.isShown);
      }
    });

    // close cart if we click out
    $container.on('click', (event: JQuery.ClickEvent) => {
      if ($container.hasClass(classes.isShown) && event.target === $container[0]) {
        $container.removeClass(classes.isShown);
      }
    });

    // close cart
    $closeButton.on('click', () => {
      $container.removeClass(classes.isShown);
    });
  }
}

$(document).ready(() => {
  const $cartElement = $('.elementor-cart');
  const cartMobile = new CartMobile($cartElement);
  cartMobile.bindEvents();
});
