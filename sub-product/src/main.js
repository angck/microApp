if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './router'
import store from './store'
Vue.config.productionTip = false

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/sub-product': '/',
    mode: 'history',
    routes
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[sub-common] vue app bootstrap');
}

export async function mount(props) {
  console.log('[sub-common] props from main framework', props);
  const { onGlobalStateChange, setGlobalState } = props;
  if (onGlobalStateChange) {
    onGlobalStateChange((value, prev) => {
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev)
    }, true)
  }

  if (setGlobalState) {
    setGlobalState({
      ignore: props.name,
      user: {
        name: props.name
      }
    })
  }

  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  routes = null;
}

