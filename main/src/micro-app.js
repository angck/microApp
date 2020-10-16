import store from './store'

const microApps = [
  {
    name: 'sub-common',
    entry: '//localhost:7001',
    activeRule: '/sub-common'
  },
  {
    name: 'sub-product',
    entry: '//localhost:7002',
    activeRule: '/sub-product'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
