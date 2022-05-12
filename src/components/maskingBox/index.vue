<template>
  <view class="masking" @touchmove.navtive.stop @click="maskingClick">
        <slot></slot>
  </view>
</template>

<script setup>
    const emits = defineEmits(['maskingClick'])

    const maskingClick = () => {
        emits("maskingClick")
    }
</script>

<style lang="scss" scoped>
  .masking{
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.5);
      z-index: 999;
      top: 0rpx;
      left: 0rpx;
  }
</style>