<template>
 <div>
  <h2>Father</h2>
  <Child>
    <!-- <template v-slot="youxi"> -->
    <template v-slot="{youxi}">
      <ul>
      <li v-for="y in youxi" :key="y.id">
        <div>{{ y.name }}</div>
      </li>
    </ul>
    </template>
  </Child>
  <Child>
    <template v-slot="{youxi}">
      <ol>
      <li v-for="y in youxi" :key="y.id">
        <div>{{ y.name }}</div>
      </li>
    </ol>
    </template>
  </Child>
  <Child>
    <template v-slot="{youxi}">
      <h3 v-for="y in youxi" :key="y.id">
        <div>{{ y.name }}</div>
      </h3>
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