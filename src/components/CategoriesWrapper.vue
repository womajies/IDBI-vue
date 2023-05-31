<template>
  <section class="categories">
    <h2 class="visually-hidden">Категории</h2>
    <div class="categories-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide categories__slide" v-for="category in items" :key="category.id">
          <CategoriesItem :item="category" />
        </div>
      </div>
      <div class="wave"></div>
    </div>
  </section>
</template>

<script>
import CategoriesItem from '@/components/CategoriesItem.vue';
import Swiper from 'swiper';

export default {
  name: 'Categories',

  components: { CategoriesItem, Swiper },

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  mounted() {
    this.initSwiper();
  },

  methods: {
    initSwiper() {
      new Swiper('.categories-swiper', {
        slidesPerView: 1,
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 'auto'
          }
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.categories {
  overflow: hidden;
  margin-top: 30px;

  &__slide {
    max-width: 320px;

    @media screen and (max-width: $mobileS__max) {
      max-width: none;
    }
  }

  &-swiper {
    position: relative;
    overflow: hidden;
    width: fit-content;
    margin: 0 auto;

    @media screen and (max-width: $desktop__max) {
      width: auto;
    }
  }

  .wave {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 114px;

    &::before {
      content: '';
      width: 52%;
      height: 116px;
      position: absolute;
      left: 0;
      background-image: url('@/assets/img/wave-bg.svg');
      background-size: cover;
      background-position: left bottom;
      background-repeat: repeat-x;
      transform: rotateY(180deg);

      @media screen and (max-width: $desktop__max) {
        background-size: contain;
      }
    }

    &::after {
      content: '';
      width: 52%;
      height: 116px;
      position: absolute;
      left: 49%;
      background-image: url('@/assets/img/wave-bg.svg');
      background-size: cover;
      background-position: left bottom;
      background-repeat: repeat-x;

      @media screen and (max-width: $desktop__max) {
        background-size: contain;
      }
    }
  }
}
</style>
