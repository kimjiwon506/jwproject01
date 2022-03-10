<template>
  <div class="toastWrap" v-if="visible">
    <slot class="toast" name='toast' />
  </div>
</template>

<script>
export default {
  props: {
   visible: {
      type: Boolean,
      require: true,
      default: false
    },
  },
  data(){
    return {
    }
  },
  methods:{
  },
   watch: {
  }
}
</script>

<style lang="scss" scoped>
  .toastWrap {
    z-index: 100;
    background: rgba(0,0,0,0.3);
    border-radius: 8px;
    width: 50%;
    padding: 10px 20px;
    text-align: center;
    margin: 0 auto;
  }
</style>