<template>
  <div v-if="show"
       class="loading-screen">
    <!-- <template v-if="!show">
      <slot></slot>
    </template> -->
    <spinner message="Loading..."
             class="loading-svg"></spinner>

  </div>
</template>

<script>
import Spinner from './Loading/Spinner'
export default {
  name: 'VLoadingScreen',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Spinner
  }
}
</script>

<style lang="scss">
.loading-screen {
  position: fixed;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background: $primary;
  min-width: 100%;
  height: 100vh;
  width: 100vw;
  opacity: 1;
}
.loading-svg {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
