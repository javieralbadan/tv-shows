import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import enGB from './locales/en-GB.json';

type MessageSchema = typeof enGB;

const app = createApp(App);
const i18n = createI18n<[MessageSchema], 'en-GB'>({
	locale: 'en-GB',
	messages: {
		'en-GB': enGB,
	},
});

app.use(router);
app.use(i18n);

app.mount('#app');
