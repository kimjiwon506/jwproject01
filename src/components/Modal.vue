<template>
  <div class="modalWrap" v-show="open">
    <div class="modalContents">
      <div class="modalBody">
       <slot />
      </div>
      <div class="modalFooter">
        <button class="okBtn" @click="$emit('close', false)">{{ okTitle }}</button>
        <button class="cancleBtn" @click="$emit('close', false)">{{ cancleTitle }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
    okTitle: String,
    cancleTitle: String
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
}
</script>

<style lang="scss" scoped>
  .modalWrap {
    position:fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.5);
    z-index: 100;
  }
  .modalContents {
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 32px 24px;
    background-color: #fff;
    border-radius: 6px;
  }
  .modalBody {
    padding: 10px 15px 25px;
    text-align: center;
  }
  .modalFooter {
    width: 100%;
    display: flex;
    button {
      all: unset;
      display:inline-block;
      color: #ffffff;
      border-radius: 6px;
      width: 50%;
      text-align: center;
      padding: 8px;
    }
    .okBtn {
      background: #1890ff;
      margin-right: 8px;
    }
    .cancleBtn {
      background: #cccccc;
    }
  }
</style>