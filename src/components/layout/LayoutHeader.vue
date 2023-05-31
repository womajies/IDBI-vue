<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <router-link to="/to-women" class="header__nav-link link-hover" @click.native="closeMenu">женщинам</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/to-men" class="header__nav-link link-hover" @click.native="closeMenu">мужчинам</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/accessories" class="header__nav-link link-hover"
            @click.native="closeMenu">аксессуары</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/collections" class="header__nav-link link-hover"
            @click.native="closeMenu">новинки</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/novelties" class="header__nav-link link-hover"
            @click.native="closeMenu">коллекции</router-link>
        </li>
      </ul>
    </nav>
    <div class="header__actions">
      <BaseButton color="primary" icon="search" size="21" title="Поиск" aria-label="Поиск" />
      <BaseButton color="primary" icon="person" size="22" title="Аккаунт" aria-label="Аккаунт" />
      <BaseButton color="primary" class="relative" title="Избранное" aria-label="Избранное">
        <BaseIcon name="favorite" size="22" />
        <span class="header__actions-count">{{ getFavoriteProducts.length }}</span>
      </BaseButton>
      <BaseButton color="primary" class="relative" title="Корзина" aria-label="Корзина">
        <BaseIcon name="basket" size="22" />
        <span class="header__actions-count">{{ getBasketProducts.length }}</span>
      </BaseButton>
    </div>
  </header>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'layout-header',

  components: { BaseButton, BaseIcon },

  computed: {
    ...mapGetters(['getFavoriteProducts', 'getBasketProducts']),
  },

  methods: {
    closeMenu() {
      this.$store.commit('CLOSE_MENU')
    }
  }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';

.header {
  position: absolute;
  top: 62px;
  z-index: 10;
  display: flex;
  width: 100%;
  padding: 0 95px 0 330px;

  @media screen and (max-width: $laptop__max) {
    top: 40px;
    padding: 0 95px;
  }

  @media screen and (max-width: $tablet__max) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    padding: 50px 95px;
    background-color: var(--header-bg-color);
    transition: opacity $transition-duration $transition-timing-function,
      transform $transition-duration $transition-timing-function;

    &--opened {
      opacity: 1;
      visibility: visible;
      transform: translateY(0%);
    }
  }

  @media screen and (max-width: $mobileS__max) {
    padding: 50px 40px;
  }

  @media screen and (max-width: $mobile__max) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }

  &__nav {
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: $laptop__max) {
      justify-content: flex-start;
    }

    @media screen and (max-width: $tablet__max) {
      align-items: flex-start;
      margin-right: 24px;
    }

    @media screen and (max-width: $mobile__max) {
      margin-top: 32px;
    }

    &-list {
      display: grid;
      grid-auto-flow: column;
      gap: 46px;

      @media screen and (max-width: $tabletS__max) {
        gap: 24px;
      }

      @media screen and (max-width: $tablet__max) {
        grid-auto-flow: row;
        gap: 36px;
      }
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    justify-self: flex-end;
    max-width: 235px;
    width: 100%;
    height: fit-content;

    @media screen and (max-width: $tabletS__max) {
      max-width: 160px;
    }

    @media screen and (max-width: $tablet__max) {
      margin-right: 56px;
    }

    &-count {
      position: absolute;
      right: -8px;
      bottom: -2px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      background-color: var(--accent-color);
      border-radius: 50%;
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
    }
  }
}

.menu {
  display: none;
  align-self: flex-start;
  position: absolute;
  z-index: 11;
  right: 95px;
  top: 45px;
  transition: transform $transition-duration $transition-timing-function;

  @media screen and (max-width: $tablet__max) {
    display: flex;
  }

  @media screen and (max-width: $mobileS__max) {
    right: 40px;
  }

  &--active {
    transform: rotate(90deg);
  }
}
</style>
