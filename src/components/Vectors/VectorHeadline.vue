<template>
  <div class="textBox"
       :class="{'--is-animated': visible}"
       ref="textBox"
       :reveal="reveal">
    <slot name="title">
    </slot>

    <slot name="subtitle">

    </slot>
    <slot name="text">

    </slot>

  </div>
</template>

<script>
import { TweenLite } from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

export default {
  name: 'VectorHeadline',
  props: {
    text: {
      type: String,
      default: 'No title'
    },
    subtitle: {
      type: String,
      default: 'No subtitle'
    },
    reveal: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    visible() {
      return !!this.reveal
    }
  },
  created() {},
  methods: {
    draw(text) {
      TweenLite.to(this.$refs.textBox, 2, {
        text: text,
        ease: Linear.easeNone
      })
    },
    showText() {}
  }
}
</script>

<style lang="scss">
// $primary-color: #1e90ff;
// $secondary-color: #ffe221;
// $tertiary-color: #ffffff;
.textBox {
  // color: black;
  position: relative;
  width: 100%;
  margin: 0 auto;
  h1,
  h2,
  p {
    // color: $tertiary-color;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-100px);
    opacity: 0;
    text-shadow: 0 10px 30px rgba(2, 11, 22, 0.2);
  }

  h1 {
    // color: $secondary-color;
    animation-delay: 0.6s;
    -webkit-animation-fill-mode: forwards;
  }

  h2 {
    // color: $secondary-color;
    animation-delay: 1s;
    -webkit-animation-fill-mode: forwards;
  }

  p {
    animation-delay: 1.4s;
    -webkit-animation-fill-mode: forwards;
  }

  &.--is-animated {
    > * {
      animation-name: reveal-title;
      animation-timing-function: ease;
      animation-duration: 3s;
    }
  }
}

@keyframes reveal-title {
  0% {
    transform: translateY(-50px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
  }
}
</style>
