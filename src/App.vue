<template>
  <div id="app" class="note">
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="scss">
  .page-enter-active, .page-leave-active { 
    opacity: 1;
    transition: opacity 0.5s;
  }
 
  .page-enter, .page-leave-to { 
    opacity: 0;
  }
</style>
