<template>
    <div class="jw__sample__formEvent">
        <!-- button component -->
        <section class="formEvent__section">
            <h3 class="formEvent__title">Button Components</h3>
            <div class="formEvent__contents">
                <JwButton 
                    type="button"
                    @click="clickEvent()"
                >
                    <span>Button</span>
                </JwButton>
        
                <JwButton 
                    type="button"
                    status="active"
                    @click="clickEvent()"
                >
                    <span>Button</span>
                </JwButton>
        
                <JwButton 
                    type="button"
                    status="danger"
                    @click="clickEvent()"
                >
                    <span>Button</span>
                </JwButton>
        
                <JwButton 
                    type="button"
                    disabled
                    @click="clickEvent()"
                >
                    <span>Button</span>
                </JwButton>
            </div>

        </section>

        <!-- input component -->
        <section class="formEvent__section">
            <h3 class="formEvent__title">Input components</h3>
            <div class="formEvent__contents">
                <JwInput></JwInput>
            </div>

        </section>
    </div>
</template>

<script>
import JwButton from '../../components/JwButton.vue';
import JwInput from '../../components/JwInput.vue';

export default {
    components: {
        JwButton,
        JwInput,
    },
    data() {
        return {

        }
    },
    methods: {
        clickEvent() {
            console.log('클릭');
        }
    },
}
</script>

<style lang="scss" scoped>
    .jw__sample__formEvent {
        .formEvent {
            &__section:not(:last-child) {
                margin-bottom: 20px;
            }

            &__title {
                margin: 0 0 10px 0;
                font-size: 17px;
            }

            &__contents {
                display: flex;
                vertical-align: middle;
            }
        }
    }
</style>