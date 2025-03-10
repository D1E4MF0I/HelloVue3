<template>
    <div>
        About
    </div>
</template>

<script lang="ts" setup>
    import {onMounted, onUnmounted} from 'vue'
    defineOptions({name:'About'})

    onMounted(()=>{
        console.log('About挂载');
        
    })
    onUnmounted(()=>{
        console.log('About卸载');
        
    })
    
</script>

<style>

</style>