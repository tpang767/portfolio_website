<template>

</template>

<script>
const extend = (a, b) => {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};
class RevealFx {
  constructor(el, options) {
    this.el = el;
  }
}
</script>

<style>

</style>
