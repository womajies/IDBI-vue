<template>
  <router-link class="categories-link" to="">
    <span class="categories-name">{{ item.title }}</span>
    <div class="overflow-hidden">
      <picture>
        <source :srcset="`${item.picture.webp['1x']}, ${item.picture.webp['2x']} 1.5x`" type="image/webp">
        <img class="categories-image" :src="item.picture.jpg['1x']" :srcset="`${item.picture.jpg['2x']} 1.5x`"
          :alt="`Категория ${item.title}`">
      </picture>
    </div>
  </router-link>
</template>

<script setup>

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.categories {
  &-link {
    transition: color $transition-timing-function $transition-duration;

    &:hover {
      color: var(--accent-color-two);

      .categories-image {
        transform: scale(1.2);
      }
    }
  }

  &-image {
    width: 100%;
    transition: transform $transition-timing-function $transition-duration;
  }

  &-name {
    display: inline-block;
    margin-left: 30px;
    margin-bottom: 10px;
    font-size: 14px;
    max-width: 260px;
  }
}
</style>
