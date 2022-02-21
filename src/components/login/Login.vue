<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <div>
        <p>test</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login 페이지 입니다'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
    .login {
        background: #cccccc;
    }
</style>
