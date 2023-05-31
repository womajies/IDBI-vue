<template>
  <div>
    <picture>
      <source :srcset="`${item.picture.webp['1x']}, ${item.picture.webp['2x']} 1.5x`" type="image/webp">
      <img class="collections-image" :src="item.picture.png ? item.picture.png['1x'] : item.picture.jpg['1x']"
        :srcset="`${item.picture.png ? item.picture.png['2x'] : item.picture.jpg['2x']} 1.5x`" alt="Платья с принтами">
    </picture>
    <div class="collections-content">
      <div class="title">{{ item.text }}</div>
      <h2 class="collections-title">{{ item.title }}</h2>
      <router-link class="collections-link" to="">
        Смотреть
        <BaseIcon class="ml-12" name="arrow-right" size="8" style="height: 6px;" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/base/BaseIcon.vue';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.collections {
  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white-color);
    text-align: center;
  }

  &-image {
    width: 100%;
    height: calc(100vh - 300px);
    min-height: 700px;
    object-fit: cover;

    @media screen and (max-width: $tablet__max) {
      min-height: 500px;
    }
  }

  &-title {
    font-size: 96px;
    line-height: 117px;
    font-weight: 300;
    margin-top: 16px;

    @media screen and (max-width: $tabletS__max) {
      font-size: 70px;
      line-height: 86px;
    }

    @media screen and (max-width: $mobileS__max) {
      font-size: 48px;
      line-height: 54px;
    }
  }

  &-link {
    display: flex;
    align-items: center;
    margin-top: 58px;
    font-size: 14px;
    transition: color $transition-duration $transition-timing-function;

    @media screen and (max-width: $tabletS__max) {
      margin-top: 32px;
    }

    &:hover {
      color: var(--hover-color);
    }
  }
}
</style>
