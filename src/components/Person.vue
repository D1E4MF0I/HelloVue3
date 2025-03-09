<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}，放大10倍为{{ bigSum }}</h2>
        <button @click="add">点我sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogs" :key="index" :src="dog">
        <br>
        <button @click="getDog">点击获得小狗</button>
    </div>
</template>

<script lang="ts" setup>
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

    defineOptions({name:'Person'})

    const {sum, bigSum, add} = useSum();
    const {dogs, getDog} = useDog();
</script>

<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    img{
        height: 100px;
        margin: 0 5px;
    }
    button{
        margin: 0px 5px;
    }
</style>