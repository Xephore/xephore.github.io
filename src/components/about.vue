<template>
    <div class="container">
        <h1 class="title"> About </h1>
        <p>
            A software developer and black belt. <br />
            I have a wide breadth of interests <br /> 
            including: computer science, mathematics, <br />
            physics, philosophy, digital privacy, <br />
            photography, and art. <br />
            <br />
            I've been programming since highschool <br />
            (2014), and have graduated from Seneca <br />
            College with an Advanced Diploma in  <br />
            Computer Programming and Analysis. <br />
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'ProjAbout'
});
</script>

<style scoped>
    .container {
        padding: 50px;
    }

    .title {
        margin: 0;
        font-size: 4em;
        text-decoration: underline;
        text-shadow: -1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 1px 1px 5px #000;
    }

    p {
        font-size: 1.5em;
        /* text-shadow: 0 0 20px hsl(0, 0%, 0%); */
        text-shadow: -1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 1px 1px 5px #000;
    }
</style>