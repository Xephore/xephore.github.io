<template>
  <h1 class="title"> Projects </h1>
  <div class="grid">
    <div v-for="project in projects" :key="project.name">
      <ProjectCard :proj="project"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectCard from './project_card.vue'
import Project from '../models/project'

export default defineComponent ({
  name: 'ProjProjects',
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          name: "Feast Fair",
          link: "https://github.com/Xephore/FeastFair",
          date: "2022 — 2023",
          summary: "Locally saved cookbook manager",
          learn: "", // Reword This
          tech: [{
              lang: "TypeScript",
              colour: "hsl(204, 100%, 40%)"
            },{
              lang: "Angular",
              colour: "hsla(348, 100%, 43%, 80%)"
            },{
              lang: "HTML",
              colour: "hsla(21, 83%, 52%, 80%)"
            },{
              lang: "CSS",
              colour: "hsla(227, 80%, 52%, 80%)"
          }],
          img: "" 
        },{
          name: "Portfolio",
          link: "https://github.com/Xephore/xephore.github.io",
          date: "2022",
          summary: "The webpage that you're seeing here; my portfolio",
          learn: "VueJS / Put into practice responsive CSS", // Reword This
          tech: [{
              lang: "TypeScript",
              colour: "hsl(204, 100%, 40%)"
            },{
              lang: "Vue",
              colour: "hsl(153, 48%, 49%)"
            },{
              lang: "HTML",
              colour: "hsla(21, 83%, 52%, 80%)"
            },{
              lang: "CSS",
              colour: "hsla(227, 80%, 52%, 80%)"
          }],
          img: ""
        },{
          name: "ValTT",
          link: "https://github.com/Xephore/",
          date: "2021",
          summary: "Mockup of a Valorant Esports tracking webapp",
          learn: "Working with teams / Scope creep / Structuring large applications", // Reword This
          tech: [{
              lang: "TypeScript",
              colour: "hsl(204, 100%, 40%)"
            },{
              lang: "Angular",
              colour: "hsla(348, 100%, 43%, 80%)"
            },{
              lang: "HTML",
              colour: "hsla(21, 83%, 52%, 80%)"
            },{
              lang: "CSS",
              colour: "hsla(227, 80%, 52%, 80%)"
            },{
              lang: "JavaScript",
              colour: "hsla(52, 100%, 45%, 80%)"
            },{
              lang: "NodeJS",
              colour: "hsla(102, 40%, 53%, 80%)"
            },{
              lang: "Express",
              colour: "hsla(205, 100%, 59%, 80%)"
            },{
              lang: "MongoDB",
              colour: "hsl(146, 83%, 37%)"
            },{
              lang: "Mongoose",
              colour: "hsl(0, 100%, 27%)"
          }],
          img: "" 
        },{
          name: "Arkanoid",
          link: "https://github.com/Xephore/",
          date: "2021",
          summary: "Rough Clone of 1986's Arkanoid",
          learn: "Structuring ", // Reword This
          tech: [{
              lang: "C++",
              colour: "hsl(232, 50%, 45%)"
            },{
              lang: "OpenGL",
              colour: "hsl(204, 32%, 49%)"
            },{
              lang: "GLFW",
              colour: "hsla(32, 100%, 58%, 80%)"
          }],
          img: "" 
        },{
          name: "Air BnB Clone",
          link: "https://github.com/Xephore/",
          date: "2018",
          summary: "My first webapp! A rough clone of an Air B&B website",
          learn: "Basic Javascript concepts",
          tech: [{
              lang: "JavaScript",
              colour: "hsla(52, 100%, 45%, 80%)"
            },{
              lang: "NodeJS",
              colour: "hsla(102, 40%, 53%, 80%)"
            },{
              lang: "Express",
              colour: "hsla(205, 100%, 59%, 80%)"
            },{
              lang: "HTML", 
              colour: "hsla(21, 83%, 52%, 80%)"
            },{
              lang: "CSS",
              colour: "hsla(227, 80%, 52%, 80%)"
          }],
          img: "" 
        }
      ] as Array<Project>
    }
  }
});
</script>

<style scoped>
  .title {
    margin: 5%;
    font-size: 4em;
    text-decoration: underline;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
</style>