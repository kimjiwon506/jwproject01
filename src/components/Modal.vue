<template>
  <div v-show="open">
    <slot />
    <div>
      <button @click="$emit('close', false)">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  title: String,
  subTitle: String,
  open: Boolean,
  },
  data(){
    return {
  
    }
  },
  methods: {
    close() {
      this.$emit("close")
    }
  },
  components: {
  }
}
</script>

<style>

</style>