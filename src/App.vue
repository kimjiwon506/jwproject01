<template>
  <div id="app" class="note">
    <transition name="page">
        <Test></Test>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Test from './views/Test.vue';

export default {
  name: 'App',
  components: {
    Test,
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
