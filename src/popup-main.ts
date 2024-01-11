import { createApp } from 'vue'
import { createMemoryHistory, createRouter} from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from '~/PopupApp.vue'
import '~/assets/scss/main.scss'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const app = createApp(App);

app.use(router);

// Open /popup route by default when opening the extension popup
router.push('/popup');

app.mount('#app');
