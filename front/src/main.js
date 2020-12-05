import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'

// method1.1 import
// import zh from 'vee-validate/dist/locale/zh_CN'

// method2.1 import
import './local/index'

// 不管是方法一还是方法二，都需要在.use之后添加
Vue.use(VeeValidate)

// method1.2 to zh-cn
// // Validator是从Veevalidate里引用出来的
// Validator.localize('zh-CN',zh)

// method2.2 to zh-cn
const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
