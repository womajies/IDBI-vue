<template>
  <svg class="base-icon" :style="styles" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :href="href" :xlink:href="href" />
  </svg>
</template>

<script>
export default {
  name: 'base-icon',

  props: {
    name: {
      type: String,
      default: null,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    section: {
      type: String,
      default: '',
    },
  },

  computed: {
    styles() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },
    computedSection() {
      return this.section ? 'icon_' + this.section : 'icon';
    },
    href() {
      return `/images/icon/${this.computedSection}.svg#${this.name}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.base-icon {
  fill: currentcolor;
  transition: fill $transition-timing-function $transition-duration;
}
</style>
