<template>
 <div>
  <h2>Child</h2>
  <!-- 默认插槽 -->
  <slot></slot>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineOptions({
  name: 'Child', 
})

</script>
<style scoped>

</style>