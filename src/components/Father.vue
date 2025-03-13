<template>
 <div>
  <h2>父组件</h2>
  <!-- <input type="text" v-model="username"> -->
  <!-- 等价 -->
  <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <ATGInput v-model="username"/>
    <!-- 等价实现 -->
    <!-- <ATGInput :modelValue="username" @update:modelValue="username = $event" /> -->
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import ATGInput from './ATGInput.vue';
defineOptions({
  name: 'Father', 
})

let username = ref('zhangsan')

</script>
<style scoped>

</style>