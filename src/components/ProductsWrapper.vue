<template>
  <section class="products">
    <h2 class="products__title title text-center mx-auto">
      откроЙте для себя новинки сезона
    </h2>
    <div class="products__container">
      <router-link class="products__link" to="">
        Смотреть
        <BaseIcon class="ml-12" name="arrow-right" size="8" style="height: 6px;" />
      </router-link>
      <div class="products-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="product in items" :key="product.id">
            <ProductsItem :item="product" />
          </div>
        </div>
      </div>
      <div class="products__navigation">
        <BaseButton color="primary" class="products-swiper-button-prev uppercase" aria-label="Стрелка назад">
          <BaseIcon name="arrow-left" size="16" style="height: 12px;"></BaseIcon>
        </BaseButton>
        <BaseButton color="primary" class="products-swiper-button-next uppercase" aria-label="Стрелка вперёд">
          <BaseIcon name="arrow-right" size="16" style="height: 12px;"></BaseIcon>
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import ProductsItem from '@/components/ProductsItem.vue';
import Swiper from 'swiper';

export default {
  name: 'Products',

  components: { BaseButton, BaseIcon, ProductsItem, Swiper },

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
      new Swiper('.products-swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
          nextEl: '.products-swiper-button-next',
          prevEl: '.products-swiper-button-prev'
        },
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.products {
  padding-top: 30px;
  padding-bottom: 150px;

  &__container {
    position: relative;
    padding-top: 70px;
    padding-left: 6.40625vw;

    @media screen and (max-width: $mobileS__max) {
      padding-top: 50px;
      padding-left: 4vw;
    }
  }

  &__title {
    max-width: 272px;
  }

  &__link {
    position: absolute;
    left: 6.40625vw;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 10px;
    transform-origin: left;
    transform: rotate(-90deg);
    transition: color $transition-duration $transition-timing-function;

    &:hover {
      color: var(--hover-color);
    }
  }

  &-swiper {
    position: relative;
    overflow: hidden;
    margin-left: 86px;

    @media screen and (max-width: $mobileS__max) {
      margin-left: 50px;
    }
  }

  &__navigation {
    position: absolute;
    right: 78px;
    top: -5px;
    z-index: 1;
    width: 64px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: $mobileS__max) {
      right: 30px;
    }

    @media screen and (max-width: $mobile__max) {
      top: 15px;
    }
  }

  &-swiper-button-prev {
    display: block;

    &:hover:not(.swiper-button-disabled) {
      color: var(--accent-color-two);
    }

    &.swiper-button-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &-swiper-button-next {
    display: block;

    &:hover:not(.swiper-button-disabled) {
      color: var(--accent-color-two);
    }

    &.swiper-button-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
