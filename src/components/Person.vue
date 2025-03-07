<template>
    <div class="person">
        ???
    </div>
</template>

<script lang="ts" setup>
    import {type PersonInter, type Persons} from '@/types'
    // let person:PersonInter = {
    //     id: '123123',
    //     name: '123123',
    //     age: 100,
    // }
    let personList:Persons = [
    {
        id: '1',
        name: '1',
        age: 1,
    },{
        id: '2',
        name: '2',
        age: 100,
    },{
        id: '3',
        name: '3',
        age: 10,
    },
    ]
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