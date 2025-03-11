import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

// export const useLoveTalkStore = defineStore('loveTalk', {
//     actions: {
//         getATalk() {
//             // 发请求，获取数据 有跨域问题，未解决
//             // let res =  axios.get('https://api.1314.cool/words/api.php?return=json')

//             // 模拟
//             let title = 'test01'

//             // 请求回来的数据包装成一个对象
//             let obj = { id: nanoid(), title }

//             //  放到数组中
//             this.talkList.unshift(obj)
//         }
//     },
//     // 真正存储数据的地方
//     state() {
//         return {
//             talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
//         }
//     }
// })

export const useLoveTalkStore = defineStore('loveTalk', () => {
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )

    function getATalk() {
        // 发请求，获取数据 有跨域问题，未解决
        // let res =  axios.get('https://api.1314.cool/words/api.php?return=json')

        // 模拟
        let title = 'test01'

        // 请求回来的数据包装成一个对象
        let obj = { id: nanoid(), title }

        //  放到数组中
        talkList.unshift(obj)
    }
    return {talkList, getATalk}
})