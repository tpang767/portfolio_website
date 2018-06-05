<template>
  <figure class="frame-card">
    <img :src="image" />
    <figcaption>
      <span class="title">
        <slot name="title"></slot>
      </span>

      <slot name="subtitle"
            class="subtitle"></slot>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'VFrameCard',
  props: {
    image: {
      type: String,
      default: '/static/images/website/cover-photo-square.jpeg'
    }
  }
}
</script>

<style scoped lang="scss">
figure.frame-card {
  border: 3px solid #666666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  overflow: hidden;
  background: #ffffff;
  // text-align: center;
  position: relative;
  max-width: 400px;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

figure.frame-card * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

figure.frame-card img {
  max-width: 400px;
  max-height: 840px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  // border: 3px solid #666666;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}

figure.frame-card figcaption {
  position: absolute;
  left: 0;
  right: 0;
  top: 25%;
}

figure.frame-card title {
  background-color: #ffffff;
  width: 100%;
  text-transform: uppercase;
  font-weight: 400;
  font-style: normal;
}

figure.frame-card h3 span {
  font-weight: 800;
}

figure.frame-card h4 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -1px;
  opacity: 0.6;
}

figure.frame-card.blue img {
  border-color: #2472a4;
}

figure.frame-card.blue h3,
figure.frame-card.blue h4 {
  color: #2472a4;
}

figure.frame-card.red img {
  border-color: #ab3326;
}

figure.frame-card.red h3,
figure.frame-card.red h4 {
  color: #ab3326;
}

figure.frame-card.yellow img {
  border-color: #e08e0b;
}

figure.frame-card.yellow h3,
figure.frame-card.yellow h4 {
  color: #e08e0b;
}

figure.frame-card.green img {
  border-color: #229955;
}

figure.frame-card.green h3,
figure.frame-card.green h4 {
  color: #229955;
}

figure.frame-card.orange img {
  border-color: #d67118;
}

figure.frame-card.orange h3,
figure.frame-card.orange h4 {
  color: #d67118;
}

figure.frame-card.navy img {
  border-color: #2b3c4e;
}

figure.frame-card.navy h3,
figure.frame-card.navy h4 {
  color: #2b3c4e;
}
</style>
