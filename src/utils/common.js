import router from "./router"
import storage from "./storage"
import config from "@/config"
export default {
    install(app){
        // 配置vue全局属性
        app.config.globalProperties.$router = router
        app.config.globalProperties.$storage = storage
        app.config.globalProperties.$config = config
        // 价格分开小数以及整数
        app.config.globalProperties.priceFormat = (price) => {
            price = price / 100
			if(price){
				return [...price.toFixed(2).split("."), price.toFixed(2)];
			}else{
				return ["0","00","0.00"]
			}
        };

        // 用户名截取五位
        app.config.globalProperties.nameFormat = (name) => {
            if(name){
                return name.substring(name.length - 5)
            }
            return ""
        }

        // 图片展示
        app.config.globalProperties.getImageUrl = (name) => {
            return config.fileUrl + '/' + name
        }

        // 获取默认 px 比例
        app.config.globalProperties.pxToRpx = 750/uni.getSystemInfoSync().windowWidth
    }
}