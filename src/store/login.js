import { defineStore } from "pinia";
import { wxLogin } from "@/utils"
import config from "@/config"
import { setStorage, getStorage } from "@/utils/storage";
import { token, getRouter } from '@/api/auth/oauth'

export const useLoginStore = defineStore({
    id: "loginStore",
    state: () => ({
        // 储存登录code
        oauth: getStorage("oauth"),
        oauthCode: getStorage("oauthCode"),
        // 用户是否登录
        isLogin: false,
        // 储存用户信息
        userInfo: {},
        role: []
    }),
    actions: {
        login({username,password}){
            return new Promise((resolve) => {
                token({username,password}).then(({access_token}) => {
                    setStorage('oauth', access_token)
                    setStorage('oauthCode', 'Bearer ' + access_token)
    
                    this.oauth = access_token
                    this.oauthCode = 'Bearer ' + access_token
    
                    this.isLogin = true
    
                    // 获取用户权限
                    getRouter().then(role => {
                        this.role = role.data
                    })

                    resolve()
                })
            })
        }
    }
})