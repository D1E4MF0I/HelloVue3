<template>
    <div>
        <h2>父组件</h2>
        <GrandChild v-bind="$attrs" />
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import GrandChild from './GrandChild.vue';
defineOptions({
    name: 'Son',
})

</script>
<style scoped>
    div {
        border: 1px solid black;
        background-color: skyblue;

        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>