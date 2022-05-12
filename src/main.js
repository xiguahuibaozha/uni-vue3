import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';
import common from "./utils/common"

export function createApp() {
	const app = createSSRApp(App);
	app.use(createPinia())
	app.use(common)
	return {
		app,
	};
}
