import { useLoginStore } from "@/store/login"

export const loginPath = "/pages/login/phone"
// 可以在此对页面跳转做一些操作
class Router {
    // 白名单
    whitePages = [
       "/pages/index/index",
	   "pages/goodsManagement/index"
    ]
    // 是否可以跳转
    canIRun = true
    // 储存当前页面路径
    nowPage = "/pages/index/index"
    // 初始化跳转参数
    params = {
        // 跳转结束后清除掉正在跳转的路径
        complete:() => {
            this.canIRun = true
        }
    }

    constructor(){}

    // 相对路径转结对路径
    formatPath(path){
        const showNum = (arr) => {
            let oneNum = 0
            let doubleNum = 0
            arr.forEach(item => {
                if(item === '.'){
                    oneNum++
                }else if(item === '..'){
                    doubleNum++
                }
            })
            return {
                oneNum,
                doubleNum
            }
        }
        const pathJDArr = this.nowPage.split("/")
        const pathArr = path.split("/")
        let result = []

        if(showNum(pathArr).oneNum){
            pathJDArr[pathJDArr.length - 1] = pathArr[pathArr.length - 1]
            result = pathJDArr
        }else if(showNum(pathArr).doubleNum){
            result = pathJDArr.slice(0,pathJDArr.length - showNum(pathArr).doubleNum)
            result.push(pathArr[pathArr.length-1])
        }else {
            result = pathArr
        }

        return result.join("/")
    }

    // 用于跳转拦截
    beforeRouterEnter(params, callback){
        if(this.canIRun){
            this.nowPage = this.formatPath(params.url)
            if((!this.whitePages.find(item => (this.nowPage.indexOf(item) == 0))) && (!useLoginStore().isLogin)){
                
                // 未登录时做一些事情

            }else {
                this.canIRun = false
                callback({
                    ...this.params,
                    url: this.nowPage,
                    ...params
                })
            }
        }
    }
}

const router  = new Router()

export const navigateTo = (params) => {
    router.beforeRouterEnter(params, uni.navigateTo)
}

export const redirectTo = (params) => {
    router.beforeRouterEnter(params, uni.redirectTo)
}

export const reLaunch = (params) => {
    router.beforeRouterEnter(params, uni.reLaunch)
}

export const switchTab = (params) => {
    router.beforeRouterEnter(params, uni.switchTab)
}

export const navigateBack = (params) => {
    uni.navigateBack(params)
}

export const preloadPage = (params) => {
    router.beforeRouterEnter(params, uni.preloadPage)
}

export default {
    navigateTo, redirectTo, reLaunch, switchTab, navigateBack, preloadPage, router
}