<template>
    <label 
        class="jw__input__wrap"
        v-bind="$attrs"
    >
        <input
           type="radio"
           v-for="(item, i) in items" :key="i"
            @change="onChange"
        />
    </label>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => {},
            required: true,
        },
    },
    methods: {
        onChange(val) {
			this.$emit('change', val)
		}
    },
    mounted() {
        console.log(this.items);
    }
}
</script>
<style lang="scss" scoped>
// input {
//     -webkit-appearance: none;
//        -moz-appearance: none;
//             appearance: none;
//                 outline: none;
// }
</style>

