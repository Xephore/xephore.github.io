<template>
  <div class="container" ref="scroll">
    <h1 class="title"> {{proj.name}}
      <a class="item" :href="proj.link" target="_blank">
          <font-awesome-icon class="icon" icon="fa-brands fa-github" />
      </a>
    </h1>
    <div class="date">{{proj.date}}</div>
    <p class="summary">{{proj.summary}}</p>
    <div class="tags">
      <div class="scroll" @click="left()">&lt;</div>
      <div class="tech-container" ref="container">
        <div class="tech-loop" v-for="tech in proj.tech" :key="tech">
          <div class="tech" :style="{background: tech.colour}">
            <div class="text">{{tech.lang}}</div>
          </div>
        </div>
      </div>
      <div class="scroll" @click="right()">&gt;</div>
    </div>
    <div class="img">
      Pic
    </div>
    <div>
      <h2 class="learn">What I learned:</h2>
      <p class="learned">{{proj.learn}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Project from '../models/project'

export default  defineComponent ({
  name: 'ProjectCard',
  props: {
    proj: {
      required: true,
      type: Object as PropType<Project>
    }
  },
  data() {
    return {
      hide: true
    }
  },
  methods: {
    left() {
      let container = this.$refs.container as HTMLElement;
      container.scrollTo({
        left: container.scrollLeft - 200,
        behavior: 'smooth'
      });
    },
    right() {
      let container = this.$refs.container as HTMLElement;
      container.scrollTo({
        left: container.scrollLeft + 200,
        behavior: 'smooth'
      });
    }
  }
});
</script>

<style scoped>
  .container {
    position: relative;
    border: 5px double hsla(35, 50%, 60%, 80%);
    background-color: hsla(270, 50%, 15%, 80%);
    border-radius: 10%;
    padding: 10px 30px 10px 30px;
    height: 95%;
  }

  .date {
    text-align: center;
    margin: 0%;
    color: hsl(0, 0%, 55%);
  }

  .summary{
    text-align: center;
  }

  .title {
    margin: 0%;
    text-align: center;
    color: hsl(35, 80%, 50%);
  }

  .item {
    color: hsl(35, 80%, 50%);
    font-size: 1.5em;
    vertical-align: middle;
  }

  .item:hover {
    color: hsl(35, 80%, 75%);
  }

  .tags {
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    align-items: center;
    scroll-behavior: smooth;
  }

  .tech-container {
    position: relative;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    padding-left: v-bind(scrolled);
    margin: 0 5px;
  }

  .tech-container::-webkit-scrollbar {
    display: none;
  }

  .tech-loop {
    margin: 5px;
  }

  .tech {
    padding: 5px 10px;
    border-radius: 5px;
    width: fit-content;
    background-color: hsla(255, 0%, 50%, 45%);
    text-shadow: 2px 2px 4px hsl(0, 0%, 0%);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: hsla(0, 0%, 0%, 15%);
    user-select: none;
  }

  .scroll {
    background-color: hsla(0, 0%, 100%, 20%);
    border: 2px solid hsl(0, 0%, 70%);
    border-radius: 100%;
    color: white;
    text-align: center;
    width: 2em;
    line-height: 2em;
    user-select: none;
    cursor: pointer;
    transform: translateY(0);
  }

  .scroll:hover {
    background-color: hsla(0, 0%, 100%, 35%);
    transform: translateY(0);
    transition-duration: .15s;
  }

  .scroll:active {
    background-color: hsla(0, 0%, 100%, 50%);
    transform: translateY(1px);
    transition-duration: .15s;
  }

  .learn {
    font-size: 1.4em;
    margin: 0%;
    text-align: center;
    color: hsl(35, 80%, 50%);
  }

  .learned {
    text-align: center;
  }

  .img {
    border: 2px solid cyan;
    margin: 20px 0 20px 0;
    height: 10em;
  }

</style>
