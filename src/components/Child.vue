<template>
 <div>
  <h2>子组件</h2>
  <GrandChild />
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import GrandChild from './GrandChild.vue';

defineOptions({
  name: 'Child', 
})

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