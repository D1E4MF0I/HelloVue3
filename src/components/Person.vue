<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="location">重庆</h2>
        <h3>重科</h3>
        <button @click="consoleH2">输出H2</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

    let location = ref();

    let a = 0;
    let b = 1;
    let c = 2;

    function consoleH2(){
        /* <h2 data-v-4cadc14e="">重庆</h2> */
        /* 其中data-v-4cadc14e= 是style中scoped标签作用，用于隔离样式 */
        console.log(location.value);
    }

    defineExpose({a, b, c})
</script>

<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0px 5px;
    }
</style>