import React, { useRef } from 'react';

interface CartProps {
  isShown: boolean;
  closeCart: () => void;
}

const Cart: React.FC<CartProps> = ({ isShown, closeCart }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      closeCart();
    }
  };

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
