<template>
 <div>
    <ul>
        <li>id:{{ id }}</li>
        <li>title:{{ title }}</li>
        <li>content:{{ content }}</li>
        <!-- <li>id:{{ x }}</li>
        <li>title:{{ y }}</li>
        <li>content:{{ z }}</li> -->
    </ul>
 </div>
</template>

<script setup lang='ts'>
    defineProps(['id', 'title', 'content'])
    // defineProps(['x', 'y', 'z'])
</script>
<style scoped>

</style>