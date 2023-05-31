<template>
  <BaseButton color="primary" class="btn-menu" :class="{ 'btn-menu--active': getIsMenuOpened }" icon="burger" size="32"
    @click="toggleMenu" />
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'layout-mobile-burger',

  components: { BaseButton },

  computed: {
    ...mapGetters(['getIsMenuOpened']),
  },

  methods: {
    toggleMenu() {
      this.$store.commit('TOGGLE_MENU')
    }
  }
}
</script>
