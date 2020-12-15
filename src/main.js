import Vue from 'vue'
import App from './App.vue'
import DemoButton from './components/button.vue'
import DemoDialog from './components/dialog.vue'
import DemoInput from './components/input.vue'
import DemoSwitch from './components/switch.vue'
import DemoRadio from './components/radio.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faStar,
  faEdit,
  faTrashAlt,
  faSmile,
  faTimesCircle,
  faEye
} from '@fortawesome/free-regular-svg-icons'

import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(
  faEnvelope,
  faStar,
  faEdit,
  faCheck,
  faTrashAlt,
  faSmile,
  faTimesCircle,
  faEye
)

Vue.config.productionTip = false

// 全局注册button组件
Vue.component(DemoButton.name, DemoButton)
// 全局注册dialog组件
Vue.component(DemoDialog.name, DemoDialog)
// 全局注册input组件
Vue.component(DemoInput.name, DemoInput)
// 全局注册switch组件
Vue.component(DemoSwitch.name, DemoSwitch)
// 全局注册radio组件
Vue.component(DemoRadio.name, DemoRadio)
// 全局注册字体图标组件
Vue.component('fai', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
