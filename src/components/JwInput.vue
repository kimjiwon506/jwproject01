<template>
    <div class="jw__input__wrap">
        <input
            type="text"
            class="jw__input__area"
            v-model="inputValue"
        />
        <template v-if="inputValue.length"> 
             <button
                class="jw__input__clear"
                type="button"
                @click="inputClear()"
            >
            <font-awesome-icon icon="times" size="xs"></font-awesome-icon>
        </button>
        </template>
       
    </div>
</template>

<script>
export default {
    props: {
        // TODO type="password"
        // type: {
        //     type: String,
        //     default: 'text',
        //     required: false,
        // }
    },
    data() {
        return {
            inputValue: '',
        }
    },
    methods: {
        inputClear() {
            this.inputValue = '';
        },
    },
}
</script>
<style lang="scss" scoped>
.jw__input {

    &__wrap {
        position: relative;
    }

    &__area {
        border: 1px solid $border;
        border-radius: 4px;
        transition: all .3s;
        height: 32px;
        font-size: 14px;
        line-height: 32px;
        padding-right: 35px;
    
        &:hover {
            border-color: $point;
        }
    
        &:focus {
            border-color: $point;
            box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
            outline: none;
        }
    }

    &__clear {
        position: absolute;
        top: 50%;
        right: 8px;
        width: 20px;
        height: 20px;
        border: none;
        background: #d9dadb;
        border-radius: 50%;
        color: #fff;
        transform: translate(0, -50%);

        &:hover {
            background: #c9cacd;
        }
    }
}
</style>