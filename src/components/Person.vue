<template>
    <div class="person">
        <!-- 1. 基本类型 -->
         <h2>Sum:{{ sum }}</h2>
         <button @click="changeSum">点我Sum+1</button>
         
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
    /* 情况1：基本类型 */
    let sum = ref(1);

    function changeSum(){
        sum.value ++ ;
    }

    watch(sum, (newVal, oldVal)=>{
        console.log('Sum发生变化了', newVal, oldVal);
    })
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