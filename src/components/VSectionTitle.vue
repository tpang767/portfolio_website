<template>
  <p class="section-title"
     :class="{'centered-title': center}">
    {{title}}
  </p>
</template>

<script>
export default {
  name: 'VSectionTitle',
  props: {
    title: {
      type: String
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.section-title {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translateX(-50%);
  // margin: 1rem 0;
  // padding: 2rem 0;
  // color: $primary;
  // padding: 0.5rem;
  display: block;
  // text-align: center;
  // background: $primary;
  font-family: "League Spartan-Bold";
  text-transform: uppercase;
  font-weight: bold;
  word-break: break-word;
  font-size: 1.5rem;
  margin-bottom: 0;
}
.centered-title {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
