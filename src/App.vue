<template>
  <div id="app" class="layout">
    <LayoutHeader :class="{ 'header--opened': getIsMenuOpened }" />
    <LayoutMobileBurger />

    <router-view />
  </div>
</template>

<script>
import LayoutHeader from './components/layout/LayoutHeader.vue';
import LayoutMobileBurger from './components/layout/LayoutMobileBurger.vue';
import { mapGetters } from 'vuex'

export default {
  components: { LayoutHeader, LayoutMobileBurger },

  computed: {
    ...mapGetters(['getIsMenuOpened']),
  },
}
</script>

<style lang="scss"></style>
