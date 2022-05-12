export const storage = {}

export const setStorage = (k,v) => {
    storage[k] = v
    uni.setStorageSync(k,v)
}

export const getStorage = (k) => {
    return uni.getStorageSync(k)
}

export const removeStorage = (k) => {
    storage = removeObjItem(k,storage)
    uni.removeStorageSync(k);
}

export const storageInfo = () => {
    return uni.getStorageInfoSync()
}

export const clearStorage = () => {
    storage = {}
    uni.clearStorageSync();
}

export default {
    setStorage,getStorage,removeStorage,storageInfo,clearStorage
}

// 移除对象元素
const removeObjItem = (k,o) => {
    let result = {}
    Object.keys(o).filter(item => item !== k).forEach(item => {result[item] = o[item]})
    return result
}