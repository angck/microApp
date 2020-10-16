<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 60px;
  background: #333;
  flex: 0 0 60px;
  text-align: left;
  line-height: 60px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
  }
}

.container {
  flex: 1;
  display: flex;
}

.sidebar {
  width: 200px;
  flex: 0 0 200px;
  background: #555;
}

#subapp-viewport {
  background: #f3f3f3;
  flex: 1;
}
</style>
