import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import 'element-plus/theme-chalk/dark/css-vars.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
// eslint-disable-next-line import/order
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  messages,
})
app.use(i18n)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)

app.mount('#app')
