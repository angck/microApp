import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import 'nprogress/nprogress.css'
import microApps from './micro-app'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.name) {
    return next()
  }
  if (microApps.some(item => to.path.includes(item.name))) {
    return next()
  }
  return next({ name: '404' })
})

const instance = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader (loading) {
  if (instance && instance.$children) {
    instance.$children[0].isLoading = loading
  }
}

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  }
})

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
// setDefaultMountApp('/sub-common')
start()
