import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from '~/App.vue'
import router from '~/router'
import store from '~/store'
import 'virtual:svg-icons-register'

const app = createApp(App).use(router).use(store).use(createMetaManager())

router.isReady().then(() => app.mount('#app'))
