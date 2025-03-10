<template>
    <div>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <button @click="showNewsDetail(news)">查看新闻</button>
                <RouterLink :to="{
                    name: 'xiangqing',
                    query: {
                        id: news.id,
                        title: news.title,
                        content: news.content,
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
import { useRouter } from 'vue-router'

let router = useRouter();

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

interface NewsInter {
    id: string,
    title: string,
    content: string,
}

function showNewsDetail(news: NewsInter) {
    router.replace({
        name: 'xiangqing',
        query: {
            id: news.id,
            title: news.title,
            content: news.content,
        }
    })
}
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