<template>
 <div class="count">
  <h2>当前求和为:{{ sum }}，放大10倍后{{ bigSum }}</h2>
  <h3>欢迎来到{{ school }}， 大写：{{ upperSchool }}</h3>
  <select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add">加</button>
  <button @click="minus">减</button>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import {useCountStore} from '@/store/count'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'Count'
})

// 使用useCountStore，得到一个专门保存count相关的store
const countStore = useCountStore()
// 只会将数据作为响应式的，toRefs是将所有内容生成响应式的
const {sum, school, bigSum, upperSchool} = storeToRefs(countStore)

// 数据
let n = ref(1) // 用户选择的数字

function add() {
  countStore.increment(n.value)

}
function minus() {
  countStore.sum -= n.value
}

</script>
<style scoped>
    .count{
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select, button{
        margin: 0 5px;
        height: 25px;
    }
</style>