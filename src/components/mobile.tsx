import * as React from 'react';
import { NavbarItem } from '../types/navbar-item';
import { cn } from '../utils/cn';
import Icon from './icon';
import AccountIcon from '../../public/icons/account-nav.png';
import ShoppingIcon from '../../public/icons/shopping-nav.png';
import { useState } from 'react';
import CartMobile from './cartMobile';

const CategoryItem = ({ child, onClick, isOpen }: { child: NavbarItem; onClick: () => void; isOpen: boolean }) => {
  return (
    <li className="group text-black" data-open={Boolean(isOpen)}>
      <button
        type="button"
        className="flex w-full items-center gap-8 border-b border-black px-4 py-2"
        onClick={onClick}
      >
        <img src={child?.img} key={child.id} className="size-20" />
        <p className="font-semibold">{child.label}</p>
        <Icon
          name="chevron-right"
          className="ml-auto size-10 rotate-0 text-second_blue transition duration-200 group-data-[open=true]:rotate-90"
        />
      </button>

      <ul className="transition-all group-data-[open=true]:m-8 group-data-[open=false]:h-0 group-data-[open=false]:overflow-hidden">
        {child.children?.map((grandchild) => (
          <li key={grandchild.id} className="mb-3 text-base">
            <a href={grandchild.to}>{grandchild.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

function NavbarMobile({ items }: { items: NavbarItem[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openGrandchildren, setOpenGrandchildren] = React.useState<Record<string, boolean>>({});

  const toggleGrandchildren = (childId: string) => {
    setOpenGrandchildren((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  const [isCartShown, setIsCartShown] = useState(false);

  const toggleCart = () => {
    setIsCartShown((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartShown(false);
  };

  const classes = {
    toggle: 'elementor-cart__toggle elementor-button',
  };
  return (
    <nav className="relative flex w-full flex-col tablet:flex lg:hidden">
      <div className="flex h-16 w-full items-center justify-between bg-dark_blue px-6">
        <div className="elementor-cart">
          <button
            className={`${classes.toggle} flex items-center rounded-full border border-second_blue p-1 pl-6 pr-6`}
            onClick={toggleCart}
          >
            <img className="mr-2 w-4" src={ShoppingIcon}></img>
            <p className="text-second_blue">00.00</p>
          </button>
        </div>
        <CartMobile isShown={isCartShown} closeCart={closeCart} />
        <a href="https://alzgo.fr/mon-compte">
          <img src={AccountIcon}></img>
        </a>
        <button className="flex scale-125 flex-col gap-1" onClick={() => setIsOpen((prev) => !prev)} type="button">
          <span
            className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && 'translate-y-1.5 rotate-45')}
          />
          <span className={cn(`block h-0.5 w-6 bg-second_blue transition-opacity`, isOpen && 'opacity-0')} />
          <span
            className={cn(
              `block h-0.5 w-6 bg-second_blue transition-transform`,
              isOpen && '-translate-y-1.5 -rotate-45'
            )}
          />
        </button>
      </div>

      <ul
        className="absolute left-0 top-full max-h-[calc(100vh-4rem)] w-full overflow-auto transition-all data-[open=false]:h-0 data-[open=false]:-translate-x-4 data-[open=false]:overflow-hidden data-[open=false]:opacity-0"
        data-open={Boolean(isOpen)}
      >
        {items?.map(
          (item) =>
            item.children &&
            item.children.length > 0 && (
              <li key={item.id} className="w-full bg-white transition-transform duration-300">
                <ul className="transform text-dark_blue transition-all duration-200">
                  {item.children?.map(
                    (child) =>
                      child.children &&
                      child.children.length > 0 && (
                        <CategoryItem
                          key={`${item.id}-${child.id}`}
                          child={child}
                          onClick={() => toggleGrandchildren(child.id)}
                          isOpen={openGrandchildren[child.id]}
                        />
                      )
                  )}
                </ul>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}

export default NavbarMobile;
