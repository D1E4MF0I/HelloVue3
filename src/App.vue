<template>
    <Person a="哈哈" :list="personList"/>
</template>

<script lang="ts" setup>
    defineOptions({name:'App'})
import { reactive } from 'vue';
    import Person from './components/Person.vue'
import type { Persons } from './types';

    let personList = reactive<Persons>([
        {id:'1', name:'1', age:18},
        {id:'2', name:'2', age:23},
        {id:'3', name:'3', age:52},
    ])
    
</script>

<style>
    .app{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>