<template>
  <ul class="grid cs-style-5">
    <li>
      <figure>
        <img src="/static/images/captionblocks/4.png"
             alt="img04">
        <figcaption>
          <h3>Settings</h3>
          <span>Jacob Cummings</span>
          <a href="http://dribbble.com/shots/1116685-Settings">Take a look</a>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <img src="/static/images/captionblocks/5.png"
             alt="img05">
        <figcaption>
          <h3>Safari</h3>
          <span>Jacob Cummings</span>
          <a href="http://dribbble.com/shots/1116775-Safari">Take a look</a>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <img src="/static/images/captionblocks/1.png"
             alt="img01">
        <figcaption>
          <h3>Camera</h3>
          <span>Jacob Cummings</span>
          <a href="http://dribbble.com/shots/1115632-Camera">Take a look</a>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <img src="/static/images/captionblocks/2.png"
             alt="img02">
        <figcaption>
          <h3>Music</h3>
          <span>Jacob Cummings</span>
          <a href="http://dribbble.com/shots/1115960-Music">Take a look</a>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <img src="/static/images/captionblocks/6.png"
             alt="img06">
        <figcaption>
          <h3>Game Center</h3>
          <span>Jacob Cummings</span>
          <a href="http://dribbble.com/shots/1118904-Game-Center">Take a look</a>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <img src="/static/images/captionblocks/3.png"
             alt="img03">
        <figcaption>
          <h3>Phone</h3>
          <span>Jacob Cummings</span>
          <a href="http://dribbble.com/shots/1117308-Phone">Take a look</a>
        </figcaption>
      </figure>
    </li>
  </ul>
  <!-- <caption-block-item v-for='item in items'
                        :key="item.title"
                        :item="item"></caption-block-item> -->

  <!-- </ul> -->
</template>

<script>
export default {
  name: 'CaptionBlockGrid',
  components: {
    // CaptionBlockItem
  },
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style>
.grid {
  padding: 20px 20px 100px 20px;
  max-width: 1300px;
  margin: 0 auto;
  list-style: none;
  text-align: center;
}

.grid li {
  display: inline-block;
  width: 440px;
  margin: 0;
  padding: 20px;
  text-align: left;
  position: relative;
}

.grid figure {
  margin: 0;
  position: relative;
}

.grid figure img {
  max-width: 100%;
  display: block;
  position: relative;
}

.grid figcaption {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  background: #2c3f52;
  color: #ed4e6e;
}

.grid figcaption h3 {
  margin: 0;
  padding: 0;
  color: #fff;
}

.grid figcaption span:before {
  content: "by ";
}

.grid figcaption a {
  text-align: center;
  padding: 5px 10px;
  border-radius: 2px;
  display: inline-block;
  background: #ed4e6e;
  color: #fff;
}
/* Caption Style 5 */
.cs-style-5 figure img {
  z-index: 10;
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  transition: transform 0.4s;
}

.no-touch .cs-style-5 figure:hover img,
.cs-style-5 figure.cs-hover img {
  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  -ms-transform: scale(0.4);
  transform: scale(0.4);
}

.cs-style-5 figcaption {
  height: 100%;
  width: 100%;
  opacity: 0;
  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
  -moz-transition: -moz-transform 0.4s, opacity 0.4s;
  transition: transform 0.4s, opacity 0.4s;
}

.no-touch .cs-style-5 figure:hover figcaption,
.cs-style-5 figure.cs-hover figcaption {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

.cs-style-5 figure a {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
