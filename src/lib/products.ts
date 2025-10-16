export type ProductType = 'booster-box' | 'elite-trainer-box';

export interface Product {
  id: string;
  name: string;
  set: string;
  type: ProductType;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Scarlet & Violet Booster Box',
    set: 'Scarlet & Violet',
    type: 'booster-box',
    price: 129.99,
    image: '/src/assets/booster-box-1.jpg',
    description: 'Contains 36 booster packs. Discover new Pokemon from the Paldea region!',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Scarlet & Violet Elite Trainer Box',
    set: 'Scarlet & Violet',
    type: 'elite-trainer-box',
    price: 49.99,
    image: '/src/assets/etb-1.jpg',
    description: 'Includes 9 booster packs, 65 card sleeves, and more accessories!',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Obsidian Flames Booster Box',
    set: 'Obsidian Flames',
    type: 'booster-box',
    price: 139.99,
    image: '/src/assets/booster-box-1.jpg',
    description: 'Contains 36 booster packs from the fiery Obsidian Flames set.',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Paldea Evolved Elite Trainer Box',
    set: 'Paldea Evolved',
    type: 'elite-trainer-box',
    price: 54.99,
    image: '/src/assets/etb-1.jpg',
    description: 'Everything you need to train and evolve your Pokemon deck!',
    inStock: true,
  },
  {
    id: '5',
    name: 'Paldea Evolved Booster Box',
    set: 'Paldea Evolved',
    type: 'booster-box',
    price: 134.99,
    image: '/src/assets/booster-box-1.jpg',
    description: 'Unleash the power of evolution with 36 booster packs!',
    inStock: true,
  },
  {
    id: '6',
    name: '151 Elite Trainer Box',
    set: 'Pokemon 151',
    type: 'elite-trainer-box',
    price: 64.99,
    image: '/src/assets/etb-1.jpg',
    description: 'Celebrate the original 151 Pokemon with this special set!',
    inStock: false,
  },
];

export const sets = Array.from(new Set(products.map(p => p.set)));
