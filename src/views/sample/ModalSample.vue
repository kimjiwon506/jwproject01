<template>
  <div class="sample__formModal">
    <!-- modal component -->
    <!-- <section class="modalEvent__section">
      <div class="modalSampleBtn">
        <button @click="open = true">클릭하면 모달오픈</button>
      </div>

      <Modal
        :open="open"
        @close="open = false"
        okTitle="확인"
        cancleTitle="취소"
      >
        <strong class="modalSampleTitle"
          >확인용텍스트입니다확인용텍스트입니다확인다</strong
        >
        <p class="modalSampleSubTitle">설명을 써주세요</p>
      </Modal>
    </section> -->
    <!-- toast component -->
    <section class="modalEvent__section">
      <!-- 핸들클릭버튼 이벤트와 같이 사용해주기 -->
      <button @click="handleClickButton">모달샘플</button>
      <Toast :visible="visible">
        <!-- toast이름을 붙였으므로 template안에 넣어서 사용해주기 -->
        <template v-slot:toast>
          <strong>토스트테스트입니다.</strong>
        </template>
      </Toast>
    </section>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';
import Toast from '../../components/Toast.vue';
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleClickButton(){
      if(true){
        this.visible = true
        setTimeout(()=>{this.visible = false},3000)
      }
    } 
  },
  components: {
    Modal,
    Toast,
  },
};
</script>

<style lang="scss" scoped>
</style>
