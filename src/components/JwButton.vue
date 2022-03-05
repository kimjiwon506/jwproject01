<template>
    <div>
        <button 
            class="jw__button"
            :class="{
                'active': 'active' === status,
                'danger': 'danger' === status,
                'disabled': disabled ? 'disabled' : '',
            }"
            v-on="$listeners"
            v-bind="$attrs"
            :disabled="isDisabled"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: 'normal',
            required: false,
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    data() {
        return {
            isDisabled: false,
        }
    },
    mounted() {
        this.isDisabled = this.disabled;
        console.log(this.isDisabled, 'this.isDisabled');
    }
}
</script>
<style lang="scss" scoped>
    .jw__button {
        padding: 10px 15px;
        background: $white;
        border: 1px solid $border;
        border-radius: 4px;
        color: $black;
        font-size: 14px;
        line-height: 1;

        &:hover {
                border-color: $point;
                color: $point;
            }
        
        &.active {
            background: $point;
            border: 1px solid $point;
            color: $white;

            &:hover {
                background: #4ba8ff;
                border-color: #4ba8ff;
            }
        }

        &.danger {
            background: $danger;
            border-color: $danger;
            color: $white;

            &:hover {
                background: #fd6a6c;
                border-color: #fd6a6c;
            }
        }

        &.disabled {
            background: $disabledbg;
            border-color: $disabledbd;
            color: rgba(0,0,0,.25);
            cursor: not-allowed;
        }
    }
</style>
