<template>
    <div class="person">
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="showTel">展示电话</button>
        <button @click="changeName">修改名称</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue';


    let name = ref('张三');
    let age = 18;
    let tel = '1312223232323'
    function showTel(){
        alert(tel);
    }
    function changeName(){
        name.value = 'Zhang-San';
    }
</script>

<style>
    .person{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0px 5px;
    }
</style>