<template>
  <div class="products-item" :class="{ 'products-item--novelty': item.new, 'products-item--favorite': isFavorite }"
    :id="item.id">
    <div class="products-item__cover">
      <div class="products-item-swiper relative">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(index) in 4" :key="index">
            <ProductsItemSlider :item="item" :filter-image="imageFilterColor" />
          </div>
        </div>
        <div class="products-item-swiper-pagination"></div>

        <BaseButton color="primary" class="products-item-swiper-button-prev uppercase" aria-label="Стрелка назад">
          <BaseIcon name="arrow-left" size="16" style="height: 12px;" />
        </BaseButton>
        <BaseButton color="primary" class="products-item-swiper-button-next uppercase" aria-label="Стрелка назад">
          <BaseIcon name="arrow-right" size="16" style="height: 12px;" />
        </BaseButton>
      </div>
      <button class="products-item__favorite" aria-label="В избранное" @click="toggleFavorite">
        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.1891 0.423331C15.6891 -0.576669 12.9891 0.223331 11.2891 2.52333C9.48907 0.223331 6.88907 -0.576669 4.38907 0.523331C1.98907 1.52333 -0.310933 4.42333 0.689067 8.42333C1.38907 12.0233 4.18907 14.6233 6.48907 16.2233C8.88907 17.9233 10.9891 18.8233 11.1891 18.8233H11.3891C11.4891 18.8233 11.5891 18.8233 11.5891 18.7233C11.8891 18.6233 13.8891 17.7233 16.1891 16.1233C18.3891 14.5233 21.1891 11.9233 21.9891 8.22333C22.8891 4.32333 20.5891 1.42333 18.1891 0.423331Z" />
          <path
            d="M18.1891 0.423331C15.6891 -0.576669 12.9891 0.223331 11.2891 2.52333C9.48907 0.223331 6.88907 -0.576669 4.38907 0.523331C1.98907 1.52333 -0.310933 4.42333 0.689067 8.42333C1.38907 12.0233 4.18907 14.6233 6.48907 16.2233C8.88907 17.9233 10.9891 18.8233 11.1891 18.8233C11.1891 18.8233 11.2891 18.8233 11.3891 18.8233C11.4891 18.8233 11.5891 18.8233 11.5891 18.7233C11.8891 18.6233 13.8891 17.7233 16.1891 16.1233C18.3891 14.5233 21.1891 11.9233 21.9891 8.22333C22.8891 4.32333 20.5891 1.42333 18.1891 0.423331ZM17.6891 1.42333C19.7891 2.22333 21.5891 4.72333 20.7891 8.12333C19.4891 13.9233 12.1891 17.3233 11.1891 17.8233C9.98907 17.3233 2.88907 13.9233 1.58907 8.12333C0.889067 4.72333 2.68907 2.32333 4.78907 1.42333C5.38907 1.22333 5.88907 1.12333 6.48907 1.12333C8.48907 1.12333 9.98907 2.52333 10.7891 3.82333C10.8891 3.92333 11.0891 4.02333 11.1891 4.02333C11.3891 4.02333 11.4891 3.92333 11.5891 3.82333C12.7891 2.02333 14.9891 0.323331 17.6891 1.42333Z"
            fill="black" />
        </svg>
      </button>
      <div class="products-item__actions">
        <div class="products-item__sizes">
          <span class="products-item__sizes-item">xxs</span>
          <span class="products-item__sizes-item products-item__sizes-item--active">xs</span>
          <span class="products-item__sizes-item products-item__sizes-item--active">s</span>
          <span class="products-item__sizes-item products-item__sizes-item--active">m</span>
          <span class="products-item__sizes-item products-item__sizes-item--active">l</span>
          <span class="products-item__sizes-item">xl</span>
          <span class="products-item__sizes-item products-item__sizes-item--active">xxl</span>
        </div>
        <BaseButton color="primary" class="products-item__basket uppercase mt-8" @click="toggleBasket">
          В корзину
          <BaseIcon name="basket" size="22" class="ml-4" />
        </BaseButton>
      </div>
    </div>
    <div class="products-item__tag" v-if="item.new">Новинка</div>
    <div class="products-item__descr">
      <div class="d-flex flex-col">
        <router-link to="" class="products-item__name link-hover">{{ item.name }}</router-link>
        <span class="products-item__price mt-4">
          <del v-if="item.oldPrice" class="products-item__price--old">{{ item.oldPrice }}</del>
          {{ item.price }}
        </span>
      </div>
      <div class="products-item__colors">
        <button class="products-item__colors-btn beige" aria-label="Светло-жёлтый цвет" style="background-color: beige;"
          @click="changeColor"></button>
        <button class="products-item__colors-btn burlywood" aria-label="Светло-коричневый цвет"
          style="background-color: burlywood;" @click="changeColor"></button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import ProductsItemSlider from '@/components/ProductsItemSlider.vue';
import Swiper from 'swiper';
import { mapGetters } from 'vuex'

export default {
  components: { BaseButton, BaseIcon, ProductsItemSlider, Swiper },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters(['getFavoriteProducts', 'getBasketProducts'])
  },

  data() {
    return {
      isFavorite: false,
      imageFilterColor: null,
      favoriteProducts: [],
      basketProducts: [],
    }
  },

  mounted() {
    this.initSwiper();
  },

  created() {
    this.favoriteProducts = []
    localStorage.setItem('products', this.favoriteProducts)
    this.basketProducts = []
    localStorage.setItem('products', this.basketProducts)
  },

  methods: {
    toggleFavorite() {
      if (this.getFavoriteProducts.length > 0) {
        const index = this.getFavoriteProducts.indexOf(this.item)
        if (index !== -1) {
          this.$store.commit('REMOVE_FAVORITE_PRODUCT', index)
          this.isFavorite = false
          this.$toast.error({
            title: 'Удалено из избранных',
            message: `${this.item.name}`
          })
        } else {
          this.$store.commit('ADD_FAVORITE_PRODUCT', this.item)
          this.isFavorite = true
          this.$toast.success({
            title: 'В избранное',
            message: `${this.item.name}`
          })
        }
      } else {
        this.$store.commit('ADD_FAVORITE_PRODUCT', this.item)
        this.isFavorite = true
        this.$toast.success({
          title: 'В избранное',
          message: `${this.item.name}`
        })
      }
    },

    toggleBasket() {
      if (this.getBasketProducts.length > 0) {
        const index = this.getBasketProducts.indexOf(this.item)
        if (index !== -1) {
          this.$store.commit('REMOVE_BASKET_PRODUCT', index)
          this.$toast.error({
            title: 'Удален из корзины',
            message: `${this.item.name}`
          })
        } else {
          this.$store.commit('ADD_BASKET_PRODUCT', this.item)
          this.$toast.success({
            title: 'Добавлен в корзину',
            message: `${this.item.name}`
          })
        }
      } else {
        this.$store.commit('ADD_BASKET_PRODUCT', this.item)
        this.$toast.success({
          title: 'Добавлен в корзину',
          message: `${this.item.name}`
        })
      }
    },

    // addBasket() {
    //   if (localStorage.getItem('basket')) {
    //     this.basketProducts = JSON.parse(localStorage.getItem('basket'));
    //     const productIndex = this.basketProducts.findIndex((el) => el.id === this.item.id)
    //     if (productIndex >= 0) {
    //       this.basketProducts.splice(productIndex, 1)
    //     } else {
    //       this.basketProducts.push(this.item)
    //     }
    //     this.saveBasketToLocalStorage()
    //   } else {
    //     this.basketProducts.push(this.item)
    //     this.saveBasketToLocalStorage()
    //   }
    // },

    changeColor() {
      this.imageFilterColor = `hue-rotate(${Math.random() * 360}deg)`;
    },

    initSwiper() {
      new Swiper('.products-item-swiper', {
        slidesPerView: 1,
        allowTouchMove: false,
        pagination: {
          el: '.products-item-swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.products-item-swiper-button-next',
          prevEl: '.products-item-swiper-button-prev'
        }
      });
    },
  },
}
</script>

<style lang="scss">
@import '@/style/variables.scss';

.products-item {
  display: flex;
  flex-direction: column;

  &__tag {
    align-self: flex-end;
    padding: 5px 10px;
    font-size: 11px;
    line-height: 13px;
    font-weight: 400;
    background-color: var(--tag-bg-color);
  }

  &--novelty {
    .products-item__descr {
      padding-top: 0;
    }
  }

  &__descr {
    display: grid;
    grid-template-columns: minmax(60%, calc(100% - 104px)) auto;
    gap: 24px;
    margin-top: -10px;
    padding-top: 23px;
    padding-bottom: 2px;
  }

  &__name {
    font-size: 14px;
    line-height: 18px;
  }

  &__price {
    font-size: 14px;
    line-height: 17px;

    &--old {
      text-decoration-line: line-through;
      color: #aac4e1;
      margin-right: 4px;
    }
  }

  &__cover {
    position: relative;
    overflow: hidden;

    &:hover {
      .products-item__actions {
        opacity: 1;
        visibility: visible;
        transform: translateY(0%);
      }

      .products-item-swiper-pagination {
        opacity: 1;
        visibility: visible;
        transform: translateY(0%);
      }

      .products-item-swiper-button-prev {
        opacity: 1;
        visibility: visible;
        transform: translateX(0%);
      }

      .products-item-swiper-button-next {
        opacity: 1;
        visibility: visible;
        transform: translateX(0%);
      }
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
    padding: 16px;
    background-color: var(--white-color);
    text-align: center;
    transition: opacity $transition-duration ease-in-out,
      transform $transition-duration ease-in-out;

    @media screen and (max-width: $mobileS__max) {
      opacity: 1;
      visibility: visible;
      transform: translateY(0%);
    }
  }

  .products-item-swiper-pagination {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    opacity: 0;
    visibility: hidden;
    display: grid;
    grid-auto-flow: column;
    gap: 1px;
    transform: translateY(100%);
    transition: opacity $transition-duration ease-in-out 0.2s,
      transform $transition-duration ease-in-out 0.2s;

    @media screen and (max-width: $mobileS__max) {
      opacity: 1;
      visibility: visible;
      transform: translateY(0%);
    }

    .swiper-pagination-bullet {
      width: 100%;
      height: 4px;
      border-radius: 0;
      margin: 0;
      background-color: #d0dfdc;
      opacity: 1;

      &-active {
        background-color: var(--black-color);
        opacity: 1;
      }
    }
  }

  .products-item-swiper-button-prev {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 35%;
    left: 12px;
    width: 32px;
    height: 32px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-300%);
    border-radius: 50%;
    background-color: var(--white-color);
    color: var(--accent-color-two);
    transition: color $transition-duration $transition-timing-function,
      background-color $transition-duration $transition-timing-function,
      transform $transition-duration $transition-timing-function;

    @media screen and (max-width: $mobileS__max) {
      opacity: 1;
      visibility: visible;
      transform: translateY(0%);
    }

    &:hover:not(.swiper-button-disabled) {
      background-color: var(--accent-color-two);
      color: var(--white-color);
    }

    &.swiper-button-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .products-item-swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 35%;
    right: 12px;
    width: 32px;
    height: 32px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(300%);
    border-radius: 50%;
    background-color: var(--white-color);
    color: var(--accent-color-two);
    transition: color $transition-duration $transition-timing-function,
      background-color $transition-duration $transition-timing-function,
      transform $transition-duration $transition-timing-function;

    @media screen and (max-width: $mobileS__max) {
      opacity: 1;
      visibility: visible;
      transform: translateY(0%);
    }

    &:hover:not(.swiper-button-disabled) {
      background-color: var(--accent-color-two);
      color: var(--white-color);
    }

    &.swiper-button-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &--favorite .products-item__favorite {
    color: var(--accent-color-two);
  }

  &__basket {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
  }

  &__sizes {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;

    @media screen and (max-width: $mobileS__max) {
      gap: 12px;
    }

    &-item {
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
      color: #c4c4c4;

      &--active {
        color: var(--black-color);
      }
    }
  }

  &__favorite {
    position: absolute;
    z-index: 1;
    top: 24px;
    right: 29px;
    color: var(--white-color);

    &:hover {
      svg {
        stroke: #262626;
      }
    }
  }

  &__colors {
    display: flex;
    flex-wrap: wrap;
    margin-top: 21px;

    &-btn {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      outline: 1px solid transparent;
      border: 1px solid transparent;
      transition: border-color $transition-duration $transition-timing-function,
        outline-color $transition-duration $transition-timing-function;

      &:hover,
      &:focus {
        outline-color: var(--accent-color-two);
        border-color: var(--accent-color);
      }

      &:not(:last-child) {
        margin-right: 6px;
        margin-bottom: 6px;
      }
    }
  }

  &__image {
    width: 100%;
  }
}
</style>
