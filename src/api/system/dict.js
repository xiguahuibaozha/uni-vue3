import request from "@/utils/request"

// 获取字典列表
export const getDictTyle = (k) => {
    return request({
        url: `/system/dict/data/dictType/${k}`,
        needToken: false
    })
}