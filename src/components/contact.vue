<template>
  <section class="contact">
    <div class="grid">
      <div/>
      <a class="item" href="mailto:dkerrx@gmail.com">
        <div class="wrapper">
          <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
          <p class="label">dkerrx@gmail.com</p>
        </div>
      </a>
      <a class="item" href="https://github.com/Xephore" target="_blank">
        <div class="wrapper">
          <font-awesome-icon class="icon" icon="fa-brands fa-github" />
          <p class="label">Xephore</p>
        </div>
      </a>
      <a class="item" href="tel:+1 905 621 0221">
        <div class="wrapper">
          <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
          <p class="label">(905)621-0221</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'ProjContact'
});
</script>

<style scoped>
  .contact {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    height: 6vh;
    padding: 10px;
    z-index: 1;
    background-image: linear-gradient(90deg, hsla(270, 70%, 40%, 0%) 15%, hsla(270, 70%, 40%, 100%), hsla(270, 70%, 40%, 0%) 85%);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100%;
    align-items: center;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 115%;
    width: 25%;
  }

  .wrapper:hover {
    cursor: pointer;
    color: hsl(35, 90%, 50%);
  }

  .wrapper:hover .label {
    display: inline;
  }

  .icon {
    height: 100%;
  }

  .label {
    display: none;
    margin: 0;
    text-shadow: 2px 2px 2px hsl(0, 0%, 0%);
  }
</style>