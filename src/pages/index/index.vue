<template>
  <view class="content">
	<view class="banner">
		<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" circular autoplay interval="4000">
			<swiper-item><image class="swiperItem" src="https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg"></image></swiper-item>
			<swiper-item><image class="swiperItem" src="https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg"></image></swiper-item>
			<swiper-item><image class="swiperItem" src="https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg"></image></swiper-item>
		</swiper>
	</view>
	<view style="display: flex; flex-direction: row; justify-content: space-between; padding: 40rpx 30rpx;">
		<view class="divItem">
			<view class="homeDiv">{{paddingNum(arr.num1)}}</view>
			<view class="homeEarnings">
				<view class="homeText">门店收益</view>
				<image class="homeImg" :src="getImageUrl('rightHead.png')"></image>
			</view>
		</view>
		<view class="divItem">
			<view class="homeDiv">{{paddingNum(arr.num2)}}</view>
			<view class="homeEarnings">
				<view class="homeText">分佣收益</view>
				<image class="homeImg" :src="getImageUrl('rightHead.png')"></image>
			</view>
		</view>
		<view  class="divItem">
			<view class="homeDiv">{{paddingNum(arr.num3)}}</view>
			<view class="homeEarnings">
				<view class="homeText">团队人数</view>
				<image class="homeImg" :src="getImageUrl('rightHead.png')"></image>
			</view>
		</view>
	</view>
	<view style="width: 100%; height: 12rpx; background-color: #e7e7e7;;"></view>
	<view style="display: flex; justify-content: space-between; padding: 20rpx 0 20rpx 30rpx;">
		<view style="font-size: 40rpx; font-weight: bold;">门店工具</view>
		<view style="display: flex; justify-content: center; background: linear-gradient(99deg,#c49a73 0%, #f7eadd 100%); border-radius: 66.67rpx 0rpx 0rpx 66.67rpx; width: 120rpx; height: 60rpx;">
			<image style="width: 32rpx; height: 32rpx; padding-top: 14rpx;" :src="getImageUrl('Base-qrcode.png')"></image>
			<view style="font-size: 24rpx; margin-left: 8rpx; color: white; padding-top: 14rpx;">分享</view>
		</view>
	</view>
	<view style="display: flex; flex-wrap: wrap; padding-left: 12rpx;">
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-commodity.png')"></image>
			<view class="menuDiv">商品管理</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-order.png')"></image>
			<view class="menuDiv">门店订单</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-subCommission.png')"></image>
			<view class="menuDiv">分佣订单</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-selfMention.png')"></image>
			<view class="menuDiv">自提管理</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-shop.png')"></image>
			<view class="menuDiv">店铺信息</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-staff.png')"></image>
			<view class="menuDiv">员工管理</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-achievement.png')"></image>
			<view class="menuDiv">员工业绩</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-writeOff.png')"></image>
			<view class="menuDiv">自提核销</view>
		</view>
		<view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-goods.png')"></image>
			<view class="menuDiv">调货管理</view>
		</view>
		<!-- <view class="divImg">
			<image class="menuImg" :src="getImageUrl('pages-index-news.png')"></image>
			<view class="menuDiv">店铺消息</view>
		</view> -->
	</view>
  </view>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue"
import { navigateTo } from "@/utils/router"

const arr = {
	num1: 1121,
	num2: 522,
	num3: 224223,
}
const paddingNum = (number) => {
    return number.toLocaleString()
}

const instance = getCurrentInstance()

</script>

<style scoped lang="scss">
	body{
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}
	.swiperItem{
		width: 100%;
		height: 400rpx;
	}
	.divImg{
		margin: 40rpx 43rpx 0 43rpx;
		text-align: center;
	}
	.banner{
	  width:100%;
	  height:350rpx;
	}
	.banner swiper{
	  height:100%;
	  width:100%;
	}
	.banner image{
	  width:100%;
	  height:350rpx;
	}
	.homeText{
		height: 29.33rpx;
		margin-left: 32rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: rgb(158, 158, 158);
	}
	.menuDiv{
		text-align: center;
		font-size: 24rpx;
		font-weight: bold;
		color: rgb(158, 158, 158);
	}
	.menuImg{
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		/* background-color: #e7e7e7; */
	}
	.homeImg{
		width: 20rpx; 
		height: 21.33rpx;
		margin-top: 6rpx;
	}
	.divItem{
		flex: 1;
	}
	.homeEarnings{
		display: flex;
		justify-content: center;
	}
	.homeDiv{
		font-weight: bold;
		text-align: center;
		margin-bottom: 20rpx;
		font-size: 32rpx;;
	}
	// .content {
	// }
	
	// .text-area {
	//   display: flex;
	//   justify-content: center;
	// }

	// .title {
	//   font-size: 36rpx;
	//   color: #8f8f94;
	// }
</style>