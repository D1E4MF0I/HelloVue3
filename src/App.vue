<template>
    <h2>测试</h2>
    <button @click="showPerson">展示Person组件</button>
    <Person ref="person"/>
</template>

<script lang="ts" setup>
    defineOptions({name:'App'})
import { ref } from 'vue';
    import Person from './components/Person.vue'

    let person = ref();

    function showPerson(){
        console.log(person.value);
        let index = person.value;
        console.log(index.a, index.b, index.c);
        
        /* 展示defineExpose中传递的参数，子组件自定义可传递给父组件的内容
                {
            "a": 0,
            "b": 1,
            "c": 2
        }
        */
    }

</script>

<style>
    .app{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>