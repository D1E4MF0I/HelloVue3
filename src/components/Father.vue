<template>
 <div>
    <h2>父组件</h2>
    <h3>房：{{ house }}</h3>
    <Child1 ref="c1"/>
    <button @click="changeC1Test">修改1</button>
    <Child2 ref="c2"/>
    <button @click="changeC2Test">修改2</button>
    <br>
    <button @click="getAllChilds($refs)">孩子+2</button>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

defineOptions({
  name: 'Father', 
})

let house = ref(5)

let c1 = ref()
let c2 = ref()

defineExpose({house})

function changeC1Test(){
  c1.value.test = '修改1'
}
function changeC2Test(){
  c2.value.test = '修改2'
}

// refs:{[key:string]:any}
function getAllChilds(refs:any){
  for(let key in refs){
    // console.log(refs[key].test);
    refs[key].count += 2;
  }
}

</script>
<style scoped>
    div {
        margin: 10px;
        padding: 10px;

        border: 1px solid black;
        background-color: skyblue;

        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>