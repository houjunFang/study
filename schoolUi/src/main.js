import Vue from 'vue'
import Router from 'vue-router' 
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router)  
Vue.use(ElementUI)
const router = new Router({
  routes
});

Vue.config.productionTip = false

new Vue({ 
  router,  
  render: h => h(App)
}).$mount('#app')
