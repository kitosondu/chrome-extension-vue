import { createApp } from 'vue'
import { createRouter, createMemoryHistory  } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from '~/ContentApp.vue'
import '~/assets/scss/main.scss'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const app = createApp(App);

app.use(router);

// Open /popup route by default when opening the on-page extension popup
router.push('/content');

app.mount('#content-app')

