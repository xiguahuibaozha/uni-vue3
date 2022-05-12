import { useLoginState } from "@/store/login"

// 展示所有分享页面
const canIShare = {
    "/pages/index/index": {
        path: "/pages/index/index"
    },
    "/pages_goods/detail/index": {},
    "/pages_goods/levelup/index": {},
    "/pages_goods/hotCake/index": {},
    "/pages_goods/hotCake/index": {},
    "/pages_other/store/index": {},
    "/pages_other/storeDetail/index": {},
    "/pages/dynamic/index": {},
    "/pages_dynamic/dynamicDetails/index": {},
    "/pages_mine/sharetosave/index": {
        path: "/pages/index/index"
    },
}

export default {
    mounted(){
        let curPages =  getCurrentPages();
        const path = "/" + curPages[curPages.length - 1].route
        if(canIShare[path]){
            // 将分享按钮全部开放
            wx.showShareMenu({
                menus: ['shareAppMessage', 'shareTimeline']
            })
        }else {
            // 隐藏分享按钮
            uni.hideShareMenu()
        }
    },
    onShareAppMessage(from){
        let curPages =  getCurrentPages();

        const currentPage = curPages[curPages.length - 1]

        console.log("userInfo", useLoginState().userInfo.invitationCode)
        
        const path = "/" + currentPage.route

        // 初始化分享参数
        let params = {
            title: canIShare[path].title || "邮钱村"
        }

        if(canIShare[path].path){
            params.path = canIShare[path].path +"?invite=" + useLoginState().userInfo.invitationCode
        }else {
            if(Object.keys(currentPage.options).length){
                params.path = currentPage.$page.fullPath +"&invite=" + useLoginState().userInfo.invitationCode
            }else {
                params.path = path +"?invite=" + useLoginState().userInfo.invitationCode
            }
        }

        console.log("shareParams", params)

        return params
    }
}