<template>
    <div class="person">
        <h2>监控{{ f }} + {{ s }} = {{ sum }}</h2>
        <button @click="changeF">改变第一个</button>
        <button @click="changeS">改变第二个</button>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';

   let f = ref(0);
   let s = ref(20);
   let sum = computed({
        get(){
            return f.value + s.value;
        },
        set(val){
            console.log(val);
        }
   })

   function changeF(){
        f.value += 10;
   }function changeS(){
        s.value += 10;
   }
   
   watchEffect((val)=>{
        if(f.value >= 60){
            console.log('f超过60了');
        }
        if(s.value >= 100){
            console.log('s大于等于100了');
        }
        console.log(val);
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