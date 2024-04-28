import './assets/main.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { createI18n } from 'vue-i18n';
import App from './App.vue';
import enGB from './locales/en-GB.json';
import router from './router';

type MessageSchema = typeof enGB;

const app = createApp(App);
const i18n = createI18n<[MessageSchema], 'en-GB'>({
	locale: 'en-GB',
	messages: {
		'en-GB': enGB,
	},
});

app.use(router);
app.use(createPinia());
app.use(i18n);

app.mount('#app');
