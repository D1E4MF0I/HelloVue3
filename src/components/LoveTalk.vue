<template>
 <div class="talk">
  <button @click="getLoveTalk">获取一句土味情话</button>
  <ul>
    <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title }}
    </li>
  </ul>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import axios from 'axios'
import {nanoid} from 'nanoid'

defineOptions({
  name: 'LoveTalk'
})

// 数据
let talkList = reactive([
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
])

// 方法
async function getLoveTalk() {
    // 发请求，获取数据 有跨域问题，未解决
    // let res =  axios.get('https://api.1314.cool/words/api.php?return=json')

    // 模拟
    let title = 'test01'

    // 请求回来的数据包装成一个对象
    let obj = {id:nanoid(), title}

    //  放到数组中
    talkList.unshift(obj)
}

</script>
<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>