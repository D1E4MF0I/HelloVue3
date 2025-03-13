<template>
  <div>
    <h2>父组件</h2>
    <ATGInput v-model:name="username" v-model:mima="password" />
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import ATGInput from './ATGInput.vue';
defineOptions({
  name: 'Father',
})

let username = ref('zhangsan')
let password = ref('pswd')

</script>
<style scoped></style>