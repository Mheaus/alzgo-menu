import * as React from 'react';

import { enhanceMenuWithCustomKeys } from '../utils/compute-menu-items';
import parseMenu from '../utils/dom-parser';
import { NAV_SELECTOR } from '../utils/env';
import { cn } from '../utils/cn';
import DesktopNavItem from './desktop';
// import NavbarMobile from './mobile';

function Navbar() {
  const [, setRendered] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.DEV) {
      setRendered(true);
    }
  }, []);

  const menuEl = document.querySelector(NAV_SELECTOR);

  const menuJSON = parseMenu(menuEl?.outerHTML || '');
  const navbarData = enhanceMenuWithCustomKeys(menuJSON);

  return (
    <>
      <nav
        className={cn('hidden h-16 w-full bg-dark_blue font-host', 'lg:flex lg:rounded-b-2xl')}
        ref={() => {
          document.querySelector(NAV_SELECTOR)?.classList.add('lg:hidden');
        }}
      >
        <ul className="flex w-full items-center justify-center gap-4">
          {navbarData?.map((parent) => <DesktopNavItem key={parent.id} parent={parent} />)}
        </ul>
      </nav>
      {/* <NavbarMobile data={data} /> */}
    </>
  );
}

export default Navbar;
