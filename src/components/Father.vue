<template>
 <div>
  <h2>Father</h2>
  <Child>
    <!-- 具名插槽 v-slot:slot_name -->
    <template v-slot:s2>
        <div>插槽2</div>
    </template>
    <template #s1>
        <div>插槽1</div>
    </template>
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
</style>