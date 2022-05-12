import config from "@/config"
import {
	navigateTo,
	loginPath
} from "./router"
import {
	getStorage
} from "@/utils/storage";
import {
	JSONParse
} from "./help"
import { useLoginStore } from "@/store/login"

let loadingRequest = []

let loading = false

const errorStatus = {
	400: "请求错误",
	401: "未授权或授权失败",
	402: "预留",
	404: "未找到接口",
	405: "方法不被允许"
}

// 储存定时器 处理Loading防抖
let timeout = null

// 储存最后一次错误请求与的信息
let errorMsg = null

// 判断请求是否全部执行完成并且弹出报错或关闭加载
const requestComplate = (url) => {
	loadingRequest = loadingRequest.filter(item => {
		return  item !== url
	})

	clearTimeout(timeout)
	timeout = setTimeout(() => {
		if (!loadingRequest.length) {
			loading = false
			uni.hideLoading()
	
			if (errorMsg) {
				console.warn(errorMsg)
				uni.showToast({
					title: errorMsg,
					icon: 'none'
				})
				errorMsg = null
			}
		}
	}, 300)
}

// 记录正在请求的地址
const addRequestPath = (url) => {
	return url + "?" + new Date().getTime()
}

const request = ({
	url,
	method = "GET",
	data,
	header,
	showLoading = true,
	needToken = true
}) => {
	url = config.baseUrl + url

	const params = data
	
	const requestUrl = addRequestPath(url)

	if(showLoading){
		loadingRequest.push(requestUrl)
		if (!loading) {
			loading = true
			uni.showLoading({
				title: '加载中',
				mask: true
			});
		}
	}

	header = {
		...header
	}

	if(needToken && useLoginStore().isLogin){
		header["Authorization"] = getStorage("oauthCode")
	}
	
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			timeout: 10000,
			header,
			data,
			success({
				data,
				statusCode
			}) {
				if(data.code !== 'success'){
					console.warn(url,params,data)
					reject(data)
				}

				if (statusCode === 200 && data.code === 'success') {
					resolve(data.data || data)
				} else {
					console.warn(url,params,data)
					errorMsg = data.msg || data.message || errorStatus[statusCode] || '未知错误'
					if (statusCode == 401) {
						// 如果报401就将登录状态改为false
						useLoginStore().isLogin = false
						navigateTo({
							url: loginPath
						})
					}
				}
			},
			complete() {
				requestComplate(requestUrl)
			}
		})
	})
}

export default request

// 多图片上传
export const upFileImgMany = (params) => {
	return new Promise((res,rej) => {
		uni.chooseImage({
			...params,
			success({
				tempFilePaths
			}) {
				Promise.all(tempFilePaths.map((tempFilePath, i) => {
					return new Promise((resolve, reject) => {
						const requestUrl = addRequestPath(`${config.baseUrl}/dfs/upload/image`)
						// 上传动画
						loadingRequest.push(requestUrl)
						if (!loading) {
							loading = uni.showLoading({
								title: '加载中',
								mask: true
							});
						}
						// 开始文件上传
						uni.uploadFile({
							url: `${config.baseUrl}/dfs/upload/image`,
							name: "file",
							filePath: tempFilePath,
							success({
								data,
								statusCode
							}) {
								data = JSONParse(data)
								if (statusCode === 200 && data.code === 'success') {
									resolve(data.data)
								} else {
									errorMsg = data.msg || data.message ||
										errorStatus[
											statusCode] || '未知错误'
		
									reject(errorMsg)
								}
							},
							complete() {
								requestComplate(requestUrl)
							}
						})
					})
				})).then(results => {
					res(results)
				}).catch(results => {
					rej(results)
				})
			}
		})
	})
}

// 图片上传单个
export const upFileImgOne = (params) => {
	return new Promise(resolve => {
		uni.chooseImage({
			...params,
			count: 1,
			success({
				tempFilePaths
			}) {
				const requestUrl = addRequestPath(`${config.baseUrl}/dfs/upload/image`)
				// 上传动画
				loadingRequest.push(requestUrl)
				if (!loading) {
					loading = uni.showLoading({
						title: '加载中',
						mask: true
					});
				}
				// 开始文件上传
				uni.uploadFile({
					url: `${config.baseUrl}/dfs/upload/image`,
					name: "file",
					filePath: tempFilePaths[0],
					success({
						data,
						statusCode
					}) {
						data = JSONParse(data)
						if (statusCode === 200 && data.code === 'success') {
							resolve(data.data)
						} else {
							errorMsg = data.msg || data.message ||
								errorStatus[
									statusCode] || '未知错误'
						}
					},
					complete() {
						requestComplate(requestUrl)
					}
				})
			}
		})
	})
}
