import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(
    faGithub,
    faEnvelope,
    faPhone
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');