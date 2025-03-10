<template>
    <div>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 索引到子级路由
                 <RouterLink to="/news/detail">{{ news.title }}</RouterLink> -->
                <!-- 通过模板字符串形式进行query传参
                 <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
                <!-- 通过对象参数形式进行传参
                 PS：子级路由也可以通过name进行直接跳转 -->
                <RouterLink :to="{
                    name:'xiangqing',
                    // path:'/news/detail',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content,
                    }
                }">
                    {{ news.title }}
                </RouterLink>

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