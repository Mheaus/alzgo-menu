import { NavbarItem } from '../types/navbar-item';
import { MenuItem } from './dom-parser';
import { BASE_URL } from './env';

const imgMap = {
  antipollution: '/assets/anti-pollution.png',
  boitedevitesse: '/assets/gearbox.png',
  carrosserie: '/assets/body.png',
  demarrage: '/assets/start.png',
  direction: '/assets/steering.png',
  divers: '/assets/miscellaneous.png',
  eclairage: '/assets/lighting.png',
  freinage: '/assets/braking.png',
  habitacle: '/assets/interior.png',
  moteur: '/assets/engine.png',
  multimedia: '/assets/multimedia.png',
  tableaudebord: '/assets/dashboard.png',
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
