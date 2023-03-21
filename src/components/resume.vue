<template>
<div class="grid">
    <h1 class="title"> Résumé </h1>
    <div id='pdf' class="pdf-container">
        <iframe class="pdf" src="resume.pdf">An error loading résumé has occurred</iframe>
    </div>
    <div class="right">
        <div class="button" @click="download()"> Download </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'ProjResume',
    methods: {
        download(){
            let file = document.createElement('a') as HTMLAnchorElement;
            file.href = "resume.pdf";
            file.download = "Daniel_Kerr_Resume";
            file.click();
        }
    }
});
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        height: 100%;
    }

    .title {
        margin: 0 auto;
        font-size: 4em;
        text-decoration: underline;
    }

    .pdf {
        margin: 15px;
        width: 100%;
        height: 840px;
    }

    .right {
        margin: 50% auto;
    }

    .button {
        padding: 25px;
        background-color: hsl(35, 80%, 50%);
        border-radius: 12%;
        user-select: none;
        text-shadow: 1px 1px 3px hsl(0, 0%, 0%);
        transform: translateY(0);
    }

    .button:hover {
        background-color: hsl(35, 80%, 55%);
        cursor: pointer;
        transform: translateY(0);
        transition-duration: .15s;
    }

    .button:active {
        background-color: hsl(35, 80%, 45%);
        transform: translateY(2px);
        transition-duration: .15s;
    }
</style>
