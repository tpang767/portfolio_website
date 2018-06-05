<template>
  <section class="section"
           :class="[sectionName]">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'V-Section',
  props: {
    name: {
      type: String
    }
  },
  computed: {
    sectionName() {
      return this.name.toLowerCase()
    }
  }
}
</script>

<style>
</style>

