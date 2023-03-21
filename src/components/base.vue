<template>
    <section class="home">
        <div>
            <h1 class="name">Daniel Kerr</h1>
            <p class="title">Fullstack Developer</p>
        </div>
        <div>
            <p>
            </p>
        </div>
    </section>

    <section class="about">
        <ProjAbout/>
    </section>
    <section class="projects">
        <ProjProjects/>
    </section>
    <section class="resume">
        <ProjResume/>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjAbout from './about.vue'
import ProjProjects from './projects.vue'
import ProjResume from './resume.vue'

export default defineComponent ({
    name: 'ProjBase',
    components: {
        ProjAbout,
        ProjProjects,
        ProjResume
    }
});
</script>

<style scoped>

.home {
    display: flex;
    flex-direction: column;
    height: 700px;
    align-items: center;
    justify-content: center;
}

.name {
    font-size: 5em;
}

.title {
    font-size: 2em;
    text-align: center;
}

.about {
    height: 500px;
    width: 82%;
    margin: 0 auto;
    background-image: url('../assets/metal.png');
    color: white;
}

.projects {
    /* height: 1000px; */
    margin: 50px;
}

</style>
