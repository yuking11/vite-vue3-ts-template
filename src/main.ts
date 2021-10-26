import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from '~/App.vue'
import router from '~/router'
import store from '~/store'
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

const app = createApp(App).use(router).use(store).use(createMetaManager()).use(VueSvgIconPlugin, {
  tagName: 'VueSvgIcon',
})

router.isReady().then(() => app.mount('#app'))
