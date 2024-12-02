/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import masonry from "vue-next-masonry";

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import "./vee-validate.js";

const app = createApp(App)
app.use(masonry)
registerPlugins(app)

app.mount('#app')
