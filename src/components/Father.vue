<template>
 <div class="Father">
  父组件
  <h2>父亲有一台{{ car }}</h2>
  <h3>子给的{{ toy }}</h3>
  <Son :car="car" :sendToy="getToy"/>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Son from './Son.vue';

defineOptions({
  name: 'Father'
})

let car = '宝马'
let toy = ref()

function getToy(value:string){
    toy.value = value
}

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