import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
    // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
    actions:{
        increment(value: number){
            console.log('increment被调用了', value);
            if (this.sum < 10) {
                this.sum += value
            }
            //修改数据，this是当前的store
            // this.sum += value
        }
    },
    // 真正存储数据的地方
    state(){
        return {
            sum:1,
            school:'abc',
        }
    },
    // 数据不满意可以通过getters对数据进行处理
    getters:{
        // bigSum(state) {
        //     return state.sum * 10
        // },
        bigSum:state => state.sum * 10,
        upperSchool():string{
            return this.school.toUpperCase()
        }
    },
})