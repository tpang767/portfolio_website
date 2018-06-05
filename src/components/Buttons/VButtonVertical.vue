<template>
  <router-link class="v-button-vertical"
               :to="{name: `${path}`}">{{text}}
  </router-link>
</template>

<script>
export default {
  name: 'VButtonVertical',
  props: {
    path: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="scss">
.v-button-vertical {
  padding: 0 0.7em;
  // color: rgba(255, 255, 255, 0.5);
  color: black;
  position: relative;
  text-decoration: none;
  font-family: "Brandon";
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1rem;
  font-size: 0.95rem;
  &:before {
    position: absolute;
    content: "";
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    opacity: 0;
    left: 15%;
    right: 15%;
    top: 0;
    bottom: 0;
    border-left: 3px solid $primary;
    border-right: 3px solid $primary;
  }
  &:hover,
  &.current {
    color: black;
  }
  &:hover:before,
  &.current:before {
    opacity: 1;
    left: 0;
    right: 0;
  }
}
</style>
