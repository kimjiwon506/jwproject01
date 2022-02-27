<template>
<!-- div id="wrap" :class{'isTabBar':$route.meta.tabBar} -->
  <div id="app">
    <router-view/>
  </div>
<!-- /div id="wrap" :class{'isTabBar':$route.meta.tabBar} -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $bgColor;
  margin-top: 60px;
}
</style>
