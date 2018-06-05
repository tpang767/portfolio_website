<template>
  <figure class="v-image-circle"
          :class="{'visible': !visible}"><img :src="img"
         alt="sq-sample17" />
    <figcaption>
      <slot></slot>
    </figcaption>
    <router-link :to="{name: `${path}`}">
      <h3 v-if="text">{{text}}</h3>
    </router-link>
  </figure>
</template>

<script>
export default {
  name: 'VImageCircle',
  props: {
    img: {
      type: String,
      default: '/static/images/website/cover-photo-edit.jpg'
    },
    path: {
      type: String,
      default: '#'
    },
    text: {
      type: String
    },
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang='scss'>
.v-image-circle {
  position: relative;
  display: inline-block;
  margin: 20px;
  max-width: 125px;
  width: 100%;
  color: #bbb;
  font-size: 16px;
  box-shadow: none !important;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.v-image-circle *,
.v-image-circle:before,
.v-image-circle:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.v-image-circle:before,
.v-image-circle:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: -1;
  border: 2px solid $primary;
  border-color: transparent $primary;
}

.v-image-circle img {
  max-width: 100%;
  backface-visibility: hidden;
  vertical-align: top;
  border-radius: 50%;
  padding: 10px;
}

.v-image-circle figcaption {
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 5px;
  right: 5px;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: normal;
}

.v-image-circle h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 2em;
  z-index: 1;
}

.v-image-circle a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.v-image-circle {
  &.visible figcaption {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  &.visible:before,
  &.visible:after {
    border-width: 10px;
  }

  &.visible:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &.visible:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}

.v-image-circle:hover figcaption,
.v-image-circle.hover figcaption {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.v-image-circle:hover:before,
.v-image-circle.hover:before,
.v-image-circle:hover:after,
.v-image-circle.hover:after {
  border-width: 10px;
}

.v-image-circle:hover:before,
.v-image-circle.hover:before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.v-image-circle:hover:after,
.v-image-circle.hover:after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
