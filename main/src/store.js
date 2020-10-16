import { initGlobalState } from 'qiankun'
import Vue from 'vue'

const initialState = Vue.observable({
  ignore: 'master',
  user: {
    name: 'master'
  }
})

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))

  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

actions.getGlobalState = key => {
  return key ? initialState[key] : initialState
}

export default actions
