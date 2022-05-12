import config from "@/config"
import { onShareAppMessage } from "@dcloudio/uni-app";

// uni-小程序用户分享事件
export const shareAppMessage = (params = {
	title: "邮钱村"
}) => {
	if(!params.path){
		let curPages =  getCurrentPages();
		params.path = "/" + curPages[curPages.length - 1].route
	}
	// 展示分享按钮
	wx.showShareMenu({
		menus: ['shareAppMessage', 'shareTimeline']
	})

	onShareAppMessage((from) => {
		console.log(form)
		return params
	})
}

// 下载图片
export const downloadFile = (params) => {
	uni.showLoading({
		title: '下载中'
	});
	return new Promise((resolve, reject) => {
		wx.downloadFile({
			...params,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}

// 分享
export const showShareImageMenu = (params) => {
	return new Promise((resolve, reject) => {
		wx.showShareImageMenu({
			...params,
			success() {
				resolve()
			},
			fail(rej) {
				reject()
			}
		})
	})
}

// 复制到剪贴板
export const setClipboardData = (params) => {
	return new Promise((resolve, reject) => {
		uni.setClipboardData({
			...params,
			success() {
				uni.showToast({
					title: "复制成功",
					icon: "none",
				});
				resolve()
			},
			fail() {
				reject()
			}
		});
	})
}

// 获取剪切板内容
export const getClipboardData = (params) => {
	return new Promise((resolve, reject) => {
		uni.getClipboardData({
			success(res) {
				resolve(res.data);
			},
			fail() {
				reject()
			}
		});
	})
}

// wx login
export const wxLogin = () => {
	return new Promise((resolve, reject) => {
		wx.login({
			success(res) {
				resolve(res)
			},
			fail() {
				reject()
			}
		})
	})
}


// 获取地理位置
export const choose = () => {
	return new Promise((resolve, reject) => {
		wx.choosePoi({
			success(res) {
				resolve(res)
			},
			fail() {
				reject()
			}
		})
	})
}

// 微信支付
export const requestPayMent  = (params) => {
	return new Promise((resolve,reject) => {
		wx.requestPayment({
			...params,
			success(res){
				resolve(res)
			},
			fail(rej){
				uni.showToast({
					title: "支付失败",
					icon: "none",
				});
				reject(rej)
			}
		})
	})
}

// 微信二进制流转base64
export const arrayBufferToBase64 = (arrayBuffer) => {
	return wx.arrayBufferToBase64(arrayBuffer)
}

// 打开微信客服
export const openCustomerServiceChat = (url) => {
	wx.openCustomerServiceChat({
		corpId: "wwce37a0fd775e7dae",
		extInfo: {
			url
		}
	})
}