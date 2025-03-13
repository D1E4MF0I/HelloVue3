<template>
 <div>
  <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineOptions({
  name: 'ATGInput', 
})

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

</script>
<style scoped>

</style>