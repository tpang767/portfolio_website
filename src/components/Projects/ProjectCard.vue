<template>
  <div class="blog-card"
       :class="{'alt': alt}">
    <div class="photo-wrap">
      <img :src="image"
           class="photo">
    </div>
    <!-- <ul class="details">
      <li class="author">
        <a href="#">John Doe</a>
      </li>
      <li class="date">Aug. 24, 2015</li>
      <li class="tags">
        <ul>
          <li>
            <a href="#">Learn</a>
          </li>
          <li>
            <a href="#">Code</a>
          </li>
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
        </ul>
      </li>
    </ul> -->
    <div class="description">
      <div class="content">
        <h3>
          <strong>{{title}}</strong>
        </h3>
        <!-- <p>{{subtitle}}</p> -->
        <p class="summary">{{summary}}</p>
        <a href="#">More Project Details</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    alt: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    summary: {
      type: String,
      default: 'Summary'
    },
    image: {
      type: String,
      default: 'http://i62.tinypic.com/34oq4o0.jpg'
    }
  }
}
</script>

<style lang="scss">
@mixin transition($dur, $prop: all) {
  transition: $prop $dur ease;
  -webkit-transition: $prop $dur ease;
}

@mixin bgImg($url) {
  background: url($url) center no-repeat;
  background-size: cover;
}

.blog-card {
  @include transition(0.3s, height);
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
  // margin: 0 auto 1.6%;
  overflow: hidden;
  position: relative;
  font-size: 14px;
  line-height: 1.45em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .photo-wrap {
    height: 350px;
    position: relative;
    overflow: hidden;
    .photo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    .details {
      left: 0;
    }

    &.alt {
      .details {
        right: 0;
      }
    }
  }

  &.alt {
    .details {
      right: -100%;
      left: inherit;
    }
  }

  .details {
    @include transition(0.3s);

    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    color: #fff;
    font-family: "Open Sans";
    list-style: none;
    margin: 0;
    padding: 10px 15px;
    height: 350px;

    /*POSITION*/
    position: absolute;
    top: 0;
    left: -100%;

    > li {
      padding: 3px 0;
    }

    li:before,
    .tags ul:before {
      font-family: FontAwesome;
      margin-right: 10px;
      vertical-align: middle;
    }

    .author:before {
      content: "\f007";
    }

    .date:before {
      content: "\f133";
    }

    .tags {
      ul {
        &:before {
          content: "\f02b";
        }

        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: inline-block;
        margin-right: 3px;
      }
    }

    a {
      color: inherit;
      border-bottom: 1px dotted;

      &:hover {
        color: $green;
      }
    }
  }

  .description {
    padding: 3rem;
    box-sizing: border-box;

    h1 {
      font-family: "Roboto";
      line-height: 1em;
      margin: 0 0 10px 0;
    }

    h2 {
      color: $grey / 1.5;
      font-family: "Open Sans";
      line-height: 1.2em;
      text-transform: uppercase;
      font-size: 1em;
      font-weight: 400;
      margin: 1.2% 0;
    }

    p {
      position: relative;
      margin: 0;
      padding-top: 20px;

      &:after {
        content: "";
        background: $green;
        height: 6px;
        width: 40px;

        /*POSITION*/
        position: absolute;
        top: 6px;
        left: 0;
      }
    }

    a {
      color: $green;
      margin-bottom: 10px;
      float: right;

      &:after {
        @include transition(0.3s);

        content: "\f061";
        font-family: FontAwesome;
        margin-left: -10px;
        opacity: 0;
        vertical-align: middle;
      }

      &:hover:after {
        margin-left: 5px;
        opacity: 1;
      }
    }
  }
}

@media screen and (min-width: 600px) {
  .blog-card {
    height: 350px;
    // max-width: 600px;
    margin-bottom: 2rem;
    &:hover {
      .photo {
        transform: rotate(5deg) scale(1.3);
      }

      &.alt .photo {
        transform: rotate(-5deg) scale(1.3);
      }
    }

    &.alt {
      .details {
        padding-left: 30px;
      }

      .description {
        float: right;

        &:before {
          transform: skewX(5deg);
          right: -15px;
          left: inherit;
        }
      }

      .photo {
        float: right;
      }
    }

    .photo {
      @include transition(0.5s);

      float: left;
      height: 100%;
      width: 50%;
    }

    .details {
      width: 50%;
    }

    .description {
      float: left;
      width: 50%;
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      &:before {
        transform: skewX(-5deg);
        content: "";
        background: #fff;
        width: 100%;
        z-index: -1;

        /*POSITION*/
        position: absolute;
        left: -15px;
        top: 0;
        bottom: 0;
      }
    }
  }
}
</style>
