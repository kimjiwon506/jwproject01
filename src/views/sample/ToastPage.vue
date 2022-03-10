<template>
    <div>
        <Toast :show="showToast">
          <p>토스트메세지 나오는곳</p>
        </Toast>
        <button @click="showToast = true">토스트테스트버튼</button>
    </div>
</template>

<script>
import Toast from '../../components/Toast.vue';

export default {
    components: {
        Toast,
    },
    data() {
        return {
            showToast: false,
        }
    },
    methods: {
    }
}
</script>