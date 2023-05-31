<template>
  <router-link class="products-item__link" to="">
    <picture>
      <source :srcset="`${item.picture.webp['1x']}, ${item.picture.webp['2x']} 1.5x`" type="image/webp">
      <img class="products-item__image" :src="item.picture.png['1x']" :srcset="`${item.picture.png['2x']} 1.5x`"
        :alt="item.title" :style="{ 'filter': filterImage }">
    </picture>
  </router-link>
</template>

<script setup>

defineProps({
  item: {
    type: Object,
    required: true,
  },
  filterImage: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
</style>
