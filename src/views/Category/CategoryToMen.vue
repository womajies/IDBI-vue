<template>
  <div class="container">
    Мужчинам
    <router-link class="back link-hover" to="/">Вернуться</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--accent-color);

  .back {
    position: absolute;
    top: 120px;
    right: 95px;

    @media screen and (max-width: $mobileS__max) {
      right: 40px;
    }
  }
}
</style>
