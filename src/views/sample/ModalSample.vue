<template>
  <div>
    <div class="modalSampleBtn">
      <button @click="open = true" >클릭하면 모달오픈</button>
    </div>
    <Modal :open="open" @close="open = false" okTitle="확인" cancleTitle="취소" >
      <strong class="modalSampleTitle">확인용텍스트입니다확인용텍스트입니다확인다</strong>
      <p class="modalSampleSubTitle">설명을 써주세요</p>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue'
export default {
  data(){
    return {
      open: false,
    }
  },
  methods: {
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss" scoped>
  .modalSampleBtn {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    button {
      all: unset;
      display: block;
      padding: 8px 20px;
      background: #cccccc;
      border-radius: 6px;
      color: #ffffff;
    }
  }
  .modalSampleTitle {
    display: block;
    max-width: 320px;
    width: 100%;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
  .modalSampleSubTitle {
    display: block;
    max-width: 320px;
    width: 100%;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #212529;
  }
</style>