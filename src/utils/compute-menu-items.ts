import { NavbarItem } from '../types/navbar-item';
import { MenuItem } from './dom-parser';
import { BASE_URL } from './env';

const imgMap = {
  antipollution: '/assets/anti-pollution.svg',
  boitedevitesse: '/assets/gearbox.svg',
  carrosserie: '/assets/body.svg',
  demarrage: '/assets/start.svg',
  direction: '/assets/steering.svg',
  divers: '/assets/miscellaneous.svg',
  eclairage: '/assets/lighting.svg',
  freinage: '/assets/braking.svg',
  habitacle: '/assets/interior.svg',
  moteur: '/assets/engine.svg',
  multimedia: '/assets/multimedia.svg',
  tableaudebord: '/assets/dashboard.svg',
};

function enhanceMenuWithCustomKeys(menuItems: MenuItem[]): NavbarItem[] {
  return menuItems.map((item) => {
    const id = item.text
      .toLowerCase()
      .replace(/\s+/g, '') // remove spaces
      .normalize('NFD') // remove accents
      .replace(/[-/_]/g, '') // remove - / _
      .replace(/[^\w]/g, ''); // remove non-word characters
    const to = new URL(item.href).pathname;
    const img = `${BASE_URL}${(imgMap as { [key: string]: string })[id] || imgMap.tableaudebord}`;

    return {
      id,
      label: item.text,
      to,
      img,
      children: item.children ? enhanceMenuWithCustomKeys(item.children) : [],
    };
  });
}

export { enhanceMenuWithCustomKeys };
