<template>
  <div>
    <button @click="open = true">클릭하면 모달오픈</button>
    <Modal :open="open" @close="open = false">
      slot으로 테스트
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

<style>

</style>