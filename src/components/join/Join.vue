<template>
  <div class="join">
    <h1>{{ msg }}</h1>
    <div>
        <p>test</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'join',
  data () {
    return {
      msg: 'join 페이지 입니다'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
    .join {
        background: #cccccc;
    }
</style>
