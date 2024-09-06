import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const feather = require('feather-icons');
feather.replace();

createApp(App)
    .use(router)
    .use(BackToTop)
    .use(VueToast, {
        position: 'top',
    })
    .mount('#app');

const appTheme = localStorage.getItem('theme') || process.env.VUE_APP_DEFAULT_THEME;

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
    appTheme === 'dark' &&
    document.querySelector('body').classList.contains('app-theme')
) {
    document.querySelector('body').classList.add('bg-primary-dark');
} else {
    document.querySelector('body').classList.add('bg-secondary-light');
}
