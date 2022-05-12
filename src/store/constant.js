import { getDictTyle } from "@/api/system/dict"
import { defineStore } from "pinia";

export const useConstantState = defineStore({
    id: "constantState",
    state: () => ({
        dicts: {}
    }),
    actions: {
        getContant(k){
            return new Promise((resolve,reject) => {
                if(this.dicts[k]){
                    resolve(this.dicts[k])
                }else{
                    getDictTyle(k).then(data => {
                        this.dicts[k] = data
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                }
            })
        }
    }
})