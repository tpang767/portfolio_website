<template>
  <li>
    <figure>
      <img :src="`${item.image}`"
           alt="img04">
      <figcaption>
        <h3>{{item.title}}</h3>
        <span>{{item.subtitle}}</span>
        <a :href="`${item.link}`">Take a look</a>
      </figcaption>
    </figure>
  </li>

</template>

<script>
export default {
  name: 'CaptionBlockItem',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
/
</style>
