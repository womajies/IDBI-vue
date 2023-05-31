<template>
  <button :class="classes" :disabled="disabled" :type="type" v-bind="$attrs" @click="$emit('click', $event)">
    <slot>
      <div class="d-flex items-center" :class="{ 'gap-3': icon }">
        <div v-if="text">
          {{ text }}
        </div>
        <BaseIcon v-if="icon" :name="icon" class="btn-icon" :size="size" />
      </div>
    </slot>
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'base-button',

  components: { BaseIcon },

  props: {
    color: {
      type: String,
      default: '',
      Validator: (v) => ["primary", "secondary"].includes(v),
    },

    icon: {
      type: String,
      default: null,
    },

    text: {
      type: String,
      default: '',
    },

    size: {
      type: [Number, String],
      default: 24,
    },

    type: {
      type: String,
      default: 'button',
    },

    disabled: Boolean,
  },

  computed: {
    classes() {
      return {
        btn: true,

        'btn--primary': this.color === 'primary',
        'btn--secondary': this.color === 'secondary',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.btn {
  padding: 0;
  margin: 0;
  color: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: color $transition-timing-function $transition-duration,
    border-color $transition-timing-function $transition-duration,
    background $transition-timing-function $transition-duration,
    transform $transition-duration $transition-timing-function;

  &:focus {
    border-color: var(--accent-color);
  }

  &.btn--primary {
    &:hover {
      color: var(--accent-color-two);
    }
  }

  &.btn--secondary {
    &:hover {
      color: var(--hover-color);
    }
  }

  &.btn-menu {
    position: absolute;
    top: 45px;
    right: 95px;
    z-index: 11;
    display: none;
    align-self: flex-start;

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

  .gap-3 {
    gap: 12px;
  }
}
</style>
