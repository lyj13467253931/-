import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router/index'
import 'vant/lib/index.css'
import animate from 'animate.css'
import VideoPlayer from 'vue-video-player'
import { Popup } from 'vant'
import { Area } from 'vant'
// import Toast from './components/toast'
import axios from 'axios'
import { path } from './axios/http'



Vue.prototype.$http = axios
Vue.prototype.$path = path

Vue.config.productionTip = false
require('vue-video-player/src/custom-theme.css')
require('video.js/dist/video-js.css')
Vue.use(Popup)
// Vue.use(Toast)
Vue.use(Area)
Vue.use(animate)
Vue.use(Vant)
Vue.use(VideoPlayer)




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
