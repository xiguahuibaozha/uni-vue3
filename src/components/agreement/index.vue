<template>
    <view class="radio" @click="updateValue(!modelValue)">
        <image
            v-if="modelValue"
            :src="getImageUrl('pages-login-choice.png')"
            class="choice-image"
        ></image>
        <image
            v-else
            :src="getImageUrl('pages-login-notchoice.png')"
            class="choice-image"
        ></image>
        我已阅读
        <text style="color:#D2B462;" @click.stop="navigateTo({
            url: '/pages_other/agreement/index?type=0'
        })">《邮钱村用户协议》</text>
        <text style="color:#D2B462;" @click.stop="navigateTo({
            url: '/pages_other/agreement/index?type=1'
        })">《邮钱村用户隐私协议》</text>
    </view>
</template>

<script setup>
import { ref } from "vue"
import { navigateTo } from "@/utils/router"

defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(["update:modelValue"])

const updateValue = (value) => {
    emit("update:modelValue",value)
}
</script>

<style lang="scss" scoped>
    .radio{
        font-size: 20rpx;
        color: #AFAFAF;
        display: flex;
        align-items: center;
        margin: 38rpx 0rpx;

        .choice-image{
            width: 40rpx;
            height: 40rpx;
            margin-right: 10rpx;
        }
    }
</style>