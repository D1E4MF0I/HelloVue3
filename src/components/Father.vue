<template>
 <div>
  <h2>Father</h2>
  <Child>
    <span>插槽1</span>
  </Child>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Child from './Child.vue';

defineOptions({
  name: 'Father', 
})

</script>
<style scoped>
    div{
        padding: 10px;
        margin: 10px;

        background-color: skyblue;

        border: 1px solid black;
        border-radius: 10px;

        box-shadow: 0 0 10px;
    }
    span{
        border: 1px solid;
        background-color: orange;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 5px;
    }
</style>