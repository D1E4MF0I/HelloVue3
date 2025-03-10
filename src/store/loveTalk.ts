import {defineStore} from 'pinia'

export const useLoveTalkStore = defineStore('loveTalk', {
    // 真正存储数据的地方
    state(){
        return {
            talkList:[
                {
                    id:'1',
                    title:'1',
                },
                {
                    id:'2',
                    title:'2',
                },
                {
                    id:'3',
                    title:'3',
                },
            ]
        }
    }
})