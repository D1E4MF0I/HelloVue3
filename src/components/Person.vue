<template>
    <div class="person">
       姓：<input type="text" v-model="fName"> <br>
       名：<input type="text" v-model="lName"> <br>
       全名：<span>{{ fullName }}</span> <br>
       <button @click="changeFullNameLS">更改名称为Li-Si</button>
       <button @click="changeFullNameZS">更改名称为Li-Si</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { computed, ref } from 'vue';

    let fName = ref('A');
    let lName = ref('B');

    /* 此种写法为只读，无法再次操作 */
    // let fullName = computed(()=>{
    //     return fName.value + '-' + lName.value
    // });

    /* 本质是传入一个带有set和get方法的对象，通过对象中的方法进行更改，避免只读无法更改的情况 */
    let fullName = computed({
        get(){
            return fName.value + '-' + lName.value;
        },
        /* 传入内容为Li-Si，即fullName.value = 'Li-Si'此处设置值 */
        set(val){
            const [f, l] = val.split('-');
            fName.value = f;
            lName.value = l;
        }
    });

    function changeFullNameLS(){
        fullName.value = 'Li-Si';
    }function changeFullNameZS(){
        fullName.value = 'Zhang-San';
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