<template>
 <div class="Father">
  父组件
  <h2>父亲有一台{{ car }}</h2>
  <h3 v-show="toy">子给的{{ toy }}</h3>
  <Son />
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onUnmounted } from 'vue'
import Son from './Son.vue';
import emitter from '@/utils/emitter';

defineOptions({
  name: 'Father'
})

let car = '宝马'
let toy = ref()

emitter.on('send-toy', (value) => {
  toy.value = value
})

onUnmounted(() => {
  emitter.off('send-toy')
})


</script>
<style scoped>
    .Father{
        padding: 10px;
        background-color: skyblue;
        border: 1px solid blue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>