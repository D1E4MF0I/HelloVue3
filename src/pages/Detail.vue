<template>
 <div>
    <ul>
        <li>id:{{ params.id }}</li>
        <li>title:{{ params.title }}</li>
        <li>content:{{ params.content }}</li>
    </ul>
 </div>
</template>

<script setup lang='ts'>
    import {toRefs} from 'vue'
    import {useRoute} from 'vue-router'
    const route = useRoute()
    const {params} = toRefs(route);
</script>
<style scoped>

</style>