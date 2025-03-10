<template>
 <div>
    <Count/>
    <LoveTalk/>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Count from './components/Count.vue'
import LoveTalk from './components/LoveTalk.vue'

defineOptions({
  name: 'App'
})

</script>
<style scoped>

</style>