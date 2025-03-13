<template>
  <div>
  <h2>孙组件</h2>

    <h2>a = {{ a }}</h2>
    <h2>b = {{ b }}</h2>
    <h2>c = {{ c }}</h2>
    <h2>c = {{ x }}</h2>
    <h2>c = {{ y }}</h2>
    <button @click="updateA(5)">给祖的a增加值</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineOptions({
  name: 'GrandChild',
})

defineProps(['a', 'b', 'c', 'updateA', 'x', 'y'])

</script>
<style scoped>
    div {
      border: 1px solid black;
      background-color: skyblue;

      border-radius: 10px;
      box-shadow: 0 0 10px;
    }
</style>