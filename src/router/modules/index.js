import toWomen from './categoryToWomen';
import toMen from './categoryToMen';
import accessories from './categoryAccessories';
import novelties from './categoryNovelties';
import collections from './categoryCollections';

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/Index.vue'),
  },
  ...toWomen,
  ...toMen,
  ...accessories,
  ...novelties,
  ...collections,
];
