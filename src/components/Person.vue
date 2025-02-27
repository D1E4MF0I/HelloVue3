<template>
    <div class="person">
       <h2>姓名：{{ person.name }}</h2>
       <h2>年龄：{{ person.age }}</h2>
       <button @click="changeName">修改名称</button>
       <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, toRef, toRefs } from 'vue'
    let person = reactive({
        name:'张三',
        age:18,
    })

    let {name, age} = toRefs(person);
    let name2 = toRef(person, 'name');

    function changeName(){
        name2.value = '林语堂';
        console.log(person.name, name2.value);
    }
    
    function changeAge(){
        age.value += 10;
        console.log(person.age, age.value);
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