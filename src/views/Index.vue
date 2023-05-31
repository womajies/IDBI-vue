<template>
  <main class="main">
    <Collections :items="collections" />
    <Categories :items="categories" />
    <Products :items="products" />
  </main>
</template>

<script>
import Collections from '@/components/CollectionsWrapper.vue'
import Categories from '@/components/CategoriesWrapper.vue';
import Products from '@/components/ProductsWrapper.vue';
import collectionsBgOne from '@/assets/img/collections-bg-1.jpg';
import collectionsBgOne2x from '@/assets/img/collections-bg-1@2x.jpg';
import collectionsBgOneWebp from '@/assets/img/collections-bg-1.webp';
import collectionsBgOneWebp2x from '@/assets/img/collections-bg-1@2x.webp';
import collectionsBgTwo from '@/assets/img/collections-bg-2.png';
import collectionsBgTwo2x from '@/assets/img/collections-bg-2@2x.png';
import collectionsBgTwoWebp from '@/assets/img/collections-bg-2.webp';
import collectionsBgTwoWebp2x from '@/assets/img/collections-bg-2@2x.webp';
import categoriesOne from '@/assets/img/categories-item-1.jpg';
import categoriesOne2x from '@/assets/img/categories-item-1@2x.jpg';
import categoriesOneWebp from '@/assets/img/categories-item-1.webp';
import categoriesOneWebp2x from '@/assets/img/categories-item-1@2x.webp';
import categoriesTwo from '@/assets/img/categories-item-2.jpg';
import categoriesTwo2x from '@/assets/img/categories-item-2@2x.jpg';
import categoriesTwoWebp from '@/assets/img/categories-item-2.webp';
import categoriesTwoWebp2x from '@/assets/img/categories-item-2@2x.webp';
import categoriesThree from '@/assets/img/categories-item-3.jpg';
import categoriesThree2x from '@/assets/img/categories-item-3@2x.jpg';
import categoriesThreeWebp from '@/assets/img/categories-item-3.webp';
import categoriesThreeWebp2x from '@/assets/img/categories-item-3@2x.webp';
import categoriesFour from '@/assets/img/categories-item-4.jpg';
import categoriesFour2x from '@/assets/img/categories-item-4@2x.jpg';
import categoriesFourWebp from '@/assets/img/categories-item-4.webp';
import categoriesFourWebp2x from '@/assets/img/categories-item-4@2x.webp';
import categoriesFive from '@/assets/img/categories-item-5.jpg';
import categoriesFive2x from '@/assets/img/categories-item-5@2x.jpg';
import categoriesFiveWebp from '@/assets/img/categories-item-5.webp';
import categoriesFiveWebp2x from '@/assets/img/categories-item-5@2x.webp';
import categoriesSix from '@/assets/img/categories-item-6.jpg';
import categoriesSix2x from '@/assets/img/categories-item-6@2x.jpg';
import categoriesSixWebp from '@/assets/img/categories-item-6.webp';
import categoriesSixWebp2x from '@/assets/img/categories-item-6@2x.webp';
import productsOne from '@/assets/img/products-item-1.png';
import productsOne2x from '@/assets/img/products-item-1@2x.png';
import productsOneWebp from '@/assets/img/products-item-1.webp';
import productsOneWebp2x from '@/assets/img/products-item-1@2x.webp';
import productsTwo from '@/assets/img/products-item-2.png';
import productsTwo2x from '@/assets/img/products-item-2@2x.png';
import productsTwoWebp from '@/assets/img/products-item-2.webp';
import productsTwoWebp2x from '@/assets/img/products-item-2@2x.webp';
import productsThree from '@/assets/img/products-item-3.png';
import productsThree2x from '@/assets/img/products-item-3@2x.png';
import productsThreeWebp from '@/assets/img/products-item-3.webp';
import productsThreeWebp2x from '@/assets/img/products-item-3@2x.webp';
import productsFour from '@/assets/img/products-item-4.png';
import productsFour2x from '@/assets/img/products-item-4@2x.png';
import productsFourWebp from '@/assets/img/products-item-4.webp';
import productsFourWebp2x from '@/assets/img/products-item-4@2x.webp';

export default {
  name: 'home',

  components: { Collections, Categories, Products },

  data() {
    return {
      collections: [
        {
          id: 0,
          "picture": {
            "png": {
              "1x": collectionsBgOne,
              "2x": collectionsBgOne2x,
            },
            "webp": {
              "1x": collectionsBgOneWebp,
              "2x": collectionsBgOneWebp2x,
            }
          },
          text: 'Новая коллекция 2022',
          title: 'Платья с принтами',
        },
        {
          id: 1,
          "picture": {
            "png": {
              "1x": collectionsBgTwo,
              "2x": collectionsBgTwo2x,
            },
            "webp": {
              "1x": collectionsBgTwoWebp,
              "2x": collectionsBgTwoWebp2x,
            }
          },
          text: 'Новая коллекция 2023',
          title: 'Платья с принтами',
        }
      ],

      categories: [
        {
          id: 0,
          "picture": {
            "jpg": {
              "1x": categoriesOne,
              "2x": categoriesOne2x,
            },
            "webp": {
              "1x": categoriesOneWebp,
              "2x": categoriesOneWebp2x,
            }
          },
          title: 'Лето',
        },
        {
          id: 1,
          "picture": {
            "jpg": {
              "1x": categoriesTwo,
              "2x": categoriesTwo2x,
            },
            "webp": {
              "1x": categoriesTwoWebp,
              "2x": categoriesTwoWebp2x,
            }
          },
          title: 'Путешествие',
        },
        {
          id: 2,
          "picture": {
            "jpg": {
              "1x": categoriesThree,
              "2x": categoriesThree2x,
            },
            "webp": {
              "1x": categoriesThreeWebp,
              "2x": categoriesThreeWebp2x,
            }
          },
          title: 'Коллекции',
        },
        {
          id: 3,
          "picture": {
            "jpg": {
              "1x": categoriesFour,
              "2x": categoriesFour2x,
            },
            "webp": {
              "1x": categoriesFourWebp,
              "2x": categoriesFourWebp2x,
            }
          },
          title: 'Новинки',
        },
        {
          id: 4,
          "picture": {
            "jpg": {
              "1x": categoriesFive,
              "2x": categoriesFive2x,
            },
            "webp": {
              "1x": categoriesFiveWebp,
              "2x": categoriesFiveWebp2x,
            }
          },
          title: 'Скидки',
        },
        {
          id: 5,
          "picture": {
            "jpg": {
              "1x": categoriesSix,
              "2x": categoriesSix2x,
            },
            "webp": {
              "1x": categoriesSixWebp,
              "2x": categoriesSixWebp2x,
            }
          },
          title: 'Лукбук',
        },
      ],

      products: [
        {
          id: 0,
          "picture": {
            "png": {
              "1x": productsOne,
              "2x": productsOne2x,
            },
            "webp": {
              "1x": productsOneWebp,
              "2x": productsOneWebp2x,
            }
          },
          name: 'Платье-рубашка виск атлас',
          price: '12 700р.',
          new: true,
        },
        {
          id: 1,
          "picture": {
            "png": {
              "1x": productsTwo,
              "2x": productsTwo2x,
            },
            "webp": {
              "1x": productsTwoWebp,
              "2x": productsTwoWebp2x,
            }
          },
          name: 'Юбка миди 2 полоска',
          price: '4 400р.',
          new: false,
        },
        {
          id: 2,
          "picture": {
            "png": {
              "1x": productsThree,
              "2x": productsThree2x,
            },
            "webp": {
              "1x": productsThreeWebp,
              "2x": productsThreeWebp2x,
            }
          },
          name: 'Платье-рубашка виск атлас',
          price: '12 700р.',
          new: true,
        },
        {
          id: 3,
          "picture": {
            "png": {
              "1x": productsFour,
              "2x": productsFour2x,
            },
            "webp": {
              "1x": productsFourWebp,
              "2x": productsFourWebp2x,
            }
          },
          name: 'Платье-рубашка с карманами миди',
          oldPrice: '12 700р.',
          price: '8 900р.',
          new: true,
        },
      ],
    }
  }
}
</script>
