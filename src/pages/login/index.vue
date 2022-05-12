<template>
  <view class="login-page">
    <view class="name">{{$config.title}}</view>

    <view class="type">账号密码登录</view>

    <view class="inp">
      <input
        type="text"
        v-model="account"
        placeholder="请输入您的账号"
        placeholder-style="color: #AFAFAF"
      />
      <input
        type="text"
        v-model="password"
        password
        placeholder="请输入您的登录密码"
        placeholder-style="color: #AFAFAF"
      />
    </view>

    <agreement v-model="isChoice"></agreement>

    <view
      class="btn"
      :class="{
        active: canILogin(),
      }"
      @click="login"
      >登录</view
    >

    <!-- <view class="bottom">
      <text
        @click="
          redirectTo({
            url: './phone',
          })
        "
        >手机号登录</text
      >
    </view> -->
  </view>
</template>

<script setup>
import { ref } from "vue";
import { redirectTo, navigateTo, navigateBack } from "@/utils/router";
import agreement from "@/components/agreement";
import { useLoginStore } from '@/store/login'

const loginState = useLoginStore()

const isChoice = ref(false);

// 账号
const account = ref("");
// 密码
const password = ref("");

const canILogin = () => {
  return account.value && password.value
};

// 登录
const login = () => {
  if (canILogin()) {
    if (isChoice.value) {

      loginState.login({
        username: account.value,
        password: password.value
      }).then(() => {
        navigateBack()
      })

    } else {
      uni.showToast({
        title: "请先阅读并同意协议",
        icon: "none",
      });
    }
  }else {
      uni.showToast({
        title: "请完善账号密码",
        icon: "none",
      });
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  padding: 100rpx 30rpx;
}
.name {
  color: #000000;
  font-size: 48rpx;
  letter-spacing: 5rpx;
  margin-bottom: 80rpx;
}

.inp {
  input {
    margin-top: 30rpx;
    border-bottom: 1rpx solid #dcdfe6;
    padding: 20rpx 0rpx;
    font-weight: 400;
    font-size: 28rpx;
    letter-spacing: 5rpx;
  }
}

.btn {
  text-align: center;
  padding: 20rpx;
  color: #ffffff;
  background: #ddc9b5;
  border-radius: 10rpx;
}

.active {
  background: linear-gradient(100deg, #bd946e 5%, #bd946e 97%);
}

.bottom {
  color: #afafaf;
  margin-top: 40rpx;
  font-size: 20rpx;
  letter-spacing: 2rpx;
  display: flex;
  justify-content: space-around;

  text {
    color: #000000;
  }
}
</style>
