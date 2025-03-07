<template>
    <div class="person">
        <h2>{{ a }}</h2>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}:{{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { type Persons } from '@/types'
    import {} from 'vue'

    /* 接收a */
    // defineProps(['a'])

    /* 接收并保存起来 */
    // let x = defineProps(['a'])
    // console.log(x, x.a);

    /* 只接收list */
    // defineProps(['list'])

    /* 接收list+限制类型 */
    // defineProps<{list:Persons}>()

    // 接收list+限制类型+限制必要性+指定默认值
    withDefaults(defineProps<{list?:Persons}>(), {
        list:()=>[{id:'1', name:'1', age:18},{id:'2', name:'2', age:23}, {id:'3', name:'3', age:52},]
    })
    
    
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