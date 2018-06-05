<template>
  <div class="grid-block">
    <slot></slot>
    <h3 class="is-marginless">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "GridBlock",
  props: ["title"]
};
</script>

<style lang="scss">
.grid-block {
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  padding: 2rem;
  background: #fff;
  border: 1px solid #ebecec;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  // margin: 0.5rem;
  max-height: 150px;
}

.grid-block:hover {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  -webkit-box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
}

.grid-block h3 {
  font-weight: 400;
  font-size: 1rem;
  margin: 2rem 0 0;
  text-align: center;
}
</style>
