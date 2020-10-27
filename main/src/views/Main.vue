<template>
  <div id="app">
    <div class="header">
      <a href="/sub-common/about">关于</a>
      <a href="/sub-product/">测试</a>
    </div>
    <div class="container">
      <div class="sidebar"></div>
      <div id="subapp-viewport">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
</style>
