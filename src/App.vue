<template>
    <div class="app">
        <h2 class="title">Vue路由测试</h2>
        <!-- 导航区 -->
         <div class="navigate">
            <RouterLink replace to="/home">首页</RouterLink>
            <RouterLink replace to="/news">新闻</RouterLink>
            <RouterLink replace :to="{path:'/about'}">关于</RouterLink>
         </div>
         <!-- 展示区 -->
          <div class="main-content">
            <RouterView />
          </div>
    </div>
</template>

<script lang="ts" setup>
    import { RouterView, RouterLink } from 'vue-router';

    defineOptions({name:'App'})

</script>

<style>

</style>