<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 100 100"
       preserveAspectRatio="none"
       class="divider-svg"
       :class="{'flipped': flipped}">
    <defs>
      <linearGradient v-if="colored"
                      id="linear"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                      spreadMethod="pad">
        <stop offset="0%"
              stop-color="#ece9e6" />
        <stop offset="100%"
              stop-color="#fff" />
      </linearGradient>
    </defs>
    <polygon fill="url(#linear)"
             points="0,100 100,0 100,100" />
  </svg>
</template>

<script>
export default {
  name: 'VSectionDivider',
  props: {
    colored: {
      type: Boolean,
      default: false
    },
    flipped: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
</style>
