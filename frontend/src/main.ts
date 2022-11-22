import { createApp } from 'vue'
import { useModules } from 'virtual:modules'
import App from './App.vue'

import 'element-plus/theme-chalk/dark/css-vars.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

useModules(app)

app.mount('#app')
