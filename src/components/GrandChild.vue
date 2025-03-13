<template>
 <div>
    <h2>孙组件</h2>
    <h2>count: {{ count }}</h2>
    <h2>house: {{ house }}</h2>
    <button @click="changeHouse(1)">点我house+1</button>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue'

defineOptions({
  name: 'GrandChild', 
})

let count = ref(1)

let {house, changeHouse} = inject('houseContent', {house:0, changeHouse:(value:number) => {}})

</script>

<style scoped>
    div {
        margin: 10px;
        padding: 10px;

        border: 1px solid black;
        background-color: skyblue;

        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>