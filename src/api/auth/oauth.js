import request from "@/utils/request"

// 获取字典列表
export const token = ({username,password}) => {
    return request({
        url: `/auth/oauth/token`,
        method: 'get',
        data: {
            username,
            password,
            client_id: 'yqcWeixinMiniMechant',
            client_secret: '123456',
            grant_type: 'password',
            scope: 'server',
            user_category: 'yqcMerchant'
        }
    })
}

// 获取用户权限/system/menu/getRouters
export const getRouter = () => {
    return request({
        url: `/yqc-merchant/menu/getRouters`,
        method: 'get'
    })
}