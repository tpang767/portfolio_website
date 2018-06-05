<template>
  <div class="text-reveal">
    <div class="text__first">
      <span class="text__word"></span>
      <span class="text__first-bg"></span>
    </div>
    <div class="text__second">

      <span class="text__word">
      </span>
      <span class="text__second-bg">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextReveal"
};
</script>

<style lang="scss">
.text-reveal {
  display: inline-block;
  .text__first,
  .text__second {
    position: relative;
  }
}
</style>
