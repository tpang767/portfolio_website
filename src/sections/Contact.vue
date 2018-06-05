<template>
  <section class="section contact"
           id="contact">
    <div class="container">
      <v-section-title title="Contact"></v-section-title>

      <div class="columns">
        <div class="column">
          <div class="contacts">

          </div>
          <table class="table is-narrow contacts">
            <tr v-for="contact in contacts"
                :key="contact.name">
              <td class="contact-icon">
                <a :href="contact.path">
                  <i :class="contact.icon"></i>
                </a>
              </td>
              <td class="contact-text">
                <p>{{contact.text}}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VSectionTitle from '@/components/VSectionTitle'
export default {
  name: 'Contact',
  components: {
    VSectionTitle
  },
  data() {
    return {
      contacts: [
        { name: 'email', icon: 'far fa-envelope', text: 't.pang767@gmail.com' },
        {
          name: 'github',
          icon: 'fab fa-github',
          text: 'github.com/tpang767',
          path: 'https://github.com/tpang767'
        },
        {
          name: 'linkedIn',
          icon: 'fab fa-linkedin-in',
          text: 'linkedin.com/in/thomas-pang/',
          path: 'https://linkedin.com/in/thomas-pang/'
        },
        {
          name: 'codepen',
          icon: 'fab fa-codepen',
          text: 'codepen.io/teapea767',
          path: 'https://codepen.io/teapea767'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
section.contact {
  @include shade-background;
}
.contacts {
  background: transparent;
  td.contact-icon {
    > a {
      color: black;
    }
    > a:hover {
      color: $primary;
    }
    border: 0;
  }
}
</style>
