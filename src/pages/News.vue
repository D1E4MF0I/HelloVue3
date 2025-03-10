<template>
    <div>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                 <!-- <RouterLink to="/news/detaild/你好/哈哈/嘿嘿">{{ news.title }}</RouterLink> -->
                 <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
                 <RouterLink :to="{
                    name:'xiangqing',
                    // path:'/news/detail', 此处无法使用path，必须使用name
                    params:{
                        id:news.id,
                        title:news.title,
                        content:news.content,
                    }
                 }">{{ news.title }}</RouterLink>
            </li>
        </ul>
    </div>
    <div class="box">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
let newsList = reactive([
    {
        id: 'test01',
        title: 'title01',
        content: 'content01',
    },
    {
        id: 'test02',
        title: 'title02',
        content: 'content02',
    },
    {
        id: 'test03',
        title: 'title03',
        content: 'content03',
    },
])
</script>

<style>
.box {
    width: 100%;
    height: 100px;

    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>