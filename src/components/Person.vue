<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车,价值{{ car.price }}万</h2>
        <button @click="changeCarPrice">更改价格</button>
        <button @click="changeCar">更改车辆</button>
        <br>
        <h2>一本由{{ book.author }}书写的小说，有{{ book.numbers }}页</h2>
        <button @click="changeBookNumbers">写书</button>
        <button @click="changeBook">换书</button>
    </div>
</template>

<!-- 本质上展示给页面的内容只是由变量赋值的响应式对象，如果使用新的响应式进行赋值，不会改变页面已有的响应式对象 -->
<script lang="ts" setup name="Person">
    import {reactive, ref} from 'vue'
    let car = ref({
        brand:'奔驰',
        price:100,
    })
    
    let book = reactive({
        author:'第七夜',
        numbers:131,
    })

    function changeCarPrice(){
        car.value.price += 10;
    }

    function changeCar(){
        // ref的对象直接更换，value下为响应式内容
        car.value = {price:1010, brand:'宝马'}
    }

    function changeBookNumbers(){
        book.numbers += 10;
    }
    function changeBook(){
        // reactive需要使用Object中的assign进行对象整体内容的更新，否则不为响应式
        Object.assign(book, {author:'三天两觉', numbers:298});
    }


</script>

<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0px 5px;
    }
</style>