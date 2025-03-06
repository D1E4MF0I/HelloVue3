<template>
    <div class="person">
         <h2>{{ car.brand }}售价：{{ car.price }}</h2>
         <button @click="changeCarBrand">点我更改车型</button>
         <button @click="changeCarPrice">点我更改价格</button>
         <button @click="changeCar">点我更改整台车</button>
         
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
    
    /* 对象 reactive默认开启深度，ref不默认*/
    let car = ref({
        brand:'宝马',
        price:100_000,
    })

    function changeCarBrand(){
        car.value.brand = '奇瑞';
    }

    function changeCarPrice(){
        car.value.price ++;
    }

    /* 是一种替换行为，所以，未开启深度监视也可以被监视到 */
    function changeCar(){
        car.value = {
            brand:'长安',
            price:10000,
        }
    }
    watch(car, (newVal, oldVal)=>{
        console.log('Car发生了变化', newVal, oldVal);
    })

    
    // let car = reactive({
    //     brand:'宝马',
    //     price:100_000,
    // })

    // /* 补充:Reactive无法直接更换整个对象，但可以直接更改内部对象的值 */
    // /* function changeCar(){
    //     car = {brand:'长安',
    //         price:1000,
    //     }
    // } */

    // function changeCarBrand(){
    //     car.brand = '奇瑞';
    // }

    // function changeCarPrice(){
    //     car.price += 100;
    // }

    // watch(car, (newVal, oldVal)=>{
    //     console.log('Car发生了变化', newVal, oldVal);
    // }, {deep:false})
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