<template>
    <label class="jw__input__wrap"
        @focusout="inputFocusOut()"
        @focusin="inputFocusIn()"
    >
        <input
            :type="inputType"
            class="jw__input__area"
            :class="{
                'password':'password' === type
            }"
            v-model="inputValue"
            v-bind="$attrs"
        />
        <template v-if="inputValue.length && inputFocus"> 
            <template v-if="type === 'password'">
                <button
                    class="jw__input__show"
                    type="button"
                    @click="showPassword()"
                >
                    <font-awesome-icon icon="eye" size="lg"></font-awesome-icon>
                </button>
            </template>
        
            <button
                class="jw__input__clear"
                type="button"
                @click="inputClear()"
            >
                <font-awesome-icon icon="times" size="xs"></font-awesome-icon>
            </button>
        </template>
    </label>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text',
            required: false,
        }
    },
    data() {
        return {
            inputValue: '',
            inputType: this.type,
            // TODO 포커스아웃 이벤트 해결하기
            // inputFocus: false,
            inputFocus: true,
        }
    },
    methods: {
        inputClear() {
            this.inputValue = '';
        },
        showPassword() {
            if (this.inputType === "text") {
                this.inputType="password";
            }
            else {
                this.inputType="text";
            }
        },
        inputFocusOut() {
            console.log('아웃');
            // this.inputFocus = false;
        },
        inputFocusIn() {
            console.log('인')
            // this.inputFocus = true;
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

        &.password {
            padding-right: 70px;
        }
    }

    &__show {
        position: absolute;
        top: 50%;
        right: 38px;
        width: 25px;
        height: 20px;
        padding: 0;
        background: none;
        border: none;
        color: #c3c3c3;
        transform: translate(0, -50%);

        &:hover {
            color: #a7a7a7;
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