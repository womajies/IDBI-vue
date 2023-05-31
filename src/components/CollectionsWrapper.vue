<template>
  <section class="collections">
    <h1 class="visually-hidden">Платья</h1>
    <div class="collections-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="collection in items" :key="collection.id">
          <CollectionsItem :item="collection" />
        </div>
      </div>
      <div class="collections__navigation">
        <BaseButton color="secondary" class="collections-swiper-button-prev uppercase">Предыдущий</BaseButton>
        <BaseButton color="secondary" class="collections-swiper-button-next uppercase">Следующий</BaseButton>
      </div>
      <div class="collections-swiper-scrollbar"></div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import CollectionsItem from '@/components/CollectionsItem.vue';
import Swiper from 'swiper';

export default {
  name: 'Collections',

  components: { BaseButton, BaseIcon, CollectionsItem, Swiper },

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
      new Swiper('.collections-swiper', {
        slidesPerView: 1,
        speed: 700,
        effect: 'fade',
        allowTouchMove: false,
        autoplay: {
          delay: 6000
        },
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.collections-swiper-button-next',
          prevEl: '.collections-swiper-button-prev'
        },
        scrollbar: {
          el: '.collections-swiper-scrollbar',
          draggable: true
        }
      });
    },
  },
}
</script>

<style lang="scss">
@import '@/style/variables.scss';

.collections {
  &-swiper {
    position: relative;
  }

  .swiper-slide {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 11.98%, rgba(0, 0, 0, 0.2) 46.88%);
      pointer-events: none;
    }
  }

  &__navigation {
    position: absolute;
    right: 80px;
    bottom: 80px;
    z-index: 1;
    width: 295px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 17px;
    color: var(--white-color);

    @media screen and (max-width: $tablet__max) {
      bottom: 40px;
    }

    @media screen and (max-width: $mobileS__max) {
      right: 40px;
    }

    @media screen and (max-width: $mobile__max) {
      right: 40px;
      left: 40px;
      width: auto;
    }
  }

  &-swiper-button-prev {
    transition: color $transition-duration $transition-timing-function;

    &:hover {
      color: var(--hover-color);
    }
  }

  &-swiper-button-next {
    transition: color $transition-duration $transition-timing-function;

    &:hover {
      color: var(--hover-color);
    }
  }

  &-swiper-scrollbar {
    position: absolute;
    right: 80px;
    bottom: 72px;
    z-index: 1;
    width: 295px;
    height: 4px;
    background-color: var(--black-color);
    cursor: pointer;

    @media screen and (max-width: $tablet__max) {
      bottom: 32px;
    }

    @media screen and (max-width: $mobileS__max) {
      right: 40px;
    }

    @media screen and (max-width: $mobile__max) {
      right: 40px;
      left: 40px;
      width: auto;
    }

    .swiper-scrollbar-drag {
      background-color: var(--white-color);
      border-radius: 0;
    }
  }
}
</style>
