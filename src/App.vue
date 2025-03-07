<template>
    <Person v-if="isShow"/>
</template>

<script lang="ts" setup>
    defineOptions({name:'App'})
    import { ref } from 'vue';
    import Person from './components/Person.vue'

    let isShow = ref(true)
</script>

<style>
    .app{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>