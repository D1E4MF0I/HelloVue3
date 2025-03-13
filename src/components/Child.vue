<template>
 <div>
  <h2>Child</h2>
  <slot :youxi="games"></slot>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineOptions({
  name: 'Child', 
})

let games = [
  {
    id:'id1',
    name:'game1',
  },
  {
    id:'id2',
    name:'game2',
  },
  {
    id:'id3',
    name:'game3',
  },
]

</script>
<style scoped>

</style>