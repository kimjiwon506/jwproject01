<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TestPAge',
  data () {
    return {
      msg: '테스트 페이지 입니다'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
    .hello {
        background: #cccccc;
    }
</style>
