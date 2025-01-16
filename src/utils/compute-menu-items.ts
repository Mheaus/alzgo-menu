import { NavbarItem } from '../types/navbar-item';
import { MenuItem } from './dom-parser';
import { BASE_URL } from './env';

const board = '/assets/board.svg';
const carrosserie = '/assets/carrosserie.svg';
const démarrage = '/assets/demarrage.svg';
const direction = '/assets/direction.svg';
const divers = '/assets/divers.svg';
const eclairage = '/assets/eclairage.svg';
const freinage = '/assets/freinage.svg';
const habitacle = '/assets/habitacle.svg';
const moteur = '/assets/moteur.svg';
const multimedia = '/assets/multimedia.svg';
const vitesse = '/assets/vitesse.svg';
const antipollution = '/assets/antipollution.svg';

const imgMap: { [key: string]: string } = {
  'tableau de bord': board,
  carrosserie,
  démarrage,
  direction,
  divers,
  éclairage: eclairage,
  freinage,
  habitacle,
  moteur,
  multimédia: multimedia,
  'boîte de vitesse': vitesse,
  antipollution,
};

function enhanceMenuWithCustomKeys(menuItems: MenuItem[]): NavbarItem[] {
  return menuItems.map((item) => {
    const id = item.text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    const to = new URL(item.href).pathname;
    const img = `${BASE_URL}${imgMap[item.text.toLowerCase()] || board}`;

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
