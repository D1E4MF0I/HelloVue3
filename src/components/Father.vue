<template>
    <div>
        <h2>祖组件</h2>

        <h2>a = {{ a }}</h2>
        <h2>b = {{ b }}</h2>
        <h2>c = {{ c }}</h2>
        <Son :a="a" :b="b" :c="c" :updateA="updateA" v-bind="{x:100, y:100}"/>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Son from "@/components/Son.vue";

defineOptions({
    name: 'Father',
})

let a = ref(1)
let b = ref(2)
let c = ref(3)

function updateA(value:number) {
    a.value += value
}

</script>
<style scoped>
div {
    border: 1px solid black;
    background-color: skyblue;

    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>