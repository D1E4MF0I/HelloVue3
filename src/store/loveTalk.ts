import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

export const useLoveTalkStore = defineStore('loveTalk', {
    actions: {
        getATalk() {
            // 发请求，获取数据 有跨域问题，未解决
            // let res =  axios.get('https://api.1314.cool/words/api.php?return=json')

            // 模拟
            let title = 'test01'

            // 请求回来的数据包装成一个对象
            let obj = { id: nanoid(), title }

            //  放到数组中
            this.talkList.unshift(obj)
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            talkList: [
                {
                    id: '1',
                    title: '1',
                },
                {
                    id: '2',
                    title: '2',
                },
                {
                    id: '3',
                    title: '3',
                },
            ]
        }
    }
})