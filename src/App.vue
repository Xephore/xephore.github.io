<template>
  <main>
    <ProjContact/>
    <div class="main">
      <img class="parallax" src="./assets/star_parallax.png"/>
      <div class="content">
        <ProjBase/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjBase from './components/base.vue'
import ProjContact from './components/contact.vue'

export default defineComponent({
  name: 'App',
  components: {
    ProjBase,
    ProjContact
  },
  mounted() {
    window.addEventListener('scroll', this.parallax);
  },
  unmounted() {
    window.removeEventListener('scroll', this.parallax);
  },
  methods: {
    parallax() {
      document.querySelector('img')?.style.setProperty('--y-translate', `${-document.documentElement.scrollTop/2}px`);
    }
  }
});
</script>

<style scoped>
  .main {
    position: relative;
    overflow: hidden;
  }

  .content {
    background-color: hsla(255, 100%, 4%, 75%);
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
  }

  .parallax { 
    position: absolute;
    height: 150%;
    z-index: -1;
    --y-translate: 0;
    transform: translateY(var(--y-translate));
  }
</style>
