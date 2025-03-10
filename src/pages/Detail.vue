<template>
 <div>
    <ul>
        <li>id:{{ query.id }}</li>
        <li>title:{{ query.title }}</li>
        <li>content:{{ query.content }}</li>
    </ul>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import {useRoute} from 'vue-router'
let route = useRoute();

/* 下面方法会使得query失去响应式功能 */
// let {query} = route;

/* 通过toRefs，获得route中query的地址，从而实现响应式 */
let {query} = toRefs(route);

</script>
<style scoped>

</style>