<template>
 <div>
    Home
 </div>
</template>

<script setup lang='ts'>
    import { ref, reactive, onMounted } from 'vue'
    import {useRouter} from 'vue-router'

    const router = useRouter()



    // onMounted(() => {
    //     setTimeout(() => {
    //         router.push('/news')
    //     }, 3000);
    // })
</script>
<style scoped>

</style>