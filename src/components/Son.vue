<template>
 <div class="Son">
  子组件
  <h2>孩子有{{ toy }}</h2>
  <h3>父亲有{{ car }}</h3>
  <button @click="sendToy(toy)">点我传送toy</button>
  <button @click="changeToy">更换玩具</button>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineOptions({
  name: 'Son'
})

defineProps([
  'car',
  'sendToy',
])

let toy = ref('aotumn')

function changeToy(){
  toy.value = 'atm'
}

</script>
<style scoped>
    .Son{
      padding: 10px;
      margin-top: 10px;

        background-color: skyblue;
        border: 1px solid blue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>