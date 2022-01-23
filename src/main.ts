import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from '~/App.vue'
import router from '~/router'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'

const app = createApp(App).use(router).use(createPinia()).use(createHead())

router.isReady().then(() => app.mount('#app'))
