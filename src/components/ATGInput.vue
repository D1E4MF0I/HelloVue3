<template>
  <div>
    <input type="text" :value="name" @input="emit('update:name', (<HTMLInputElement>$event.target).value)" />
    <input type="text" :value="mima" @input="emit('update:mima', (<HTMLInputElement>$event.target).value)" />

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineOptions({
  name: 'ATGInput',
})

defineProps(['name', 'mima'])
const emit = defineEmits(['update:name', 'update:mima'])

</script>
<style scoped></style>