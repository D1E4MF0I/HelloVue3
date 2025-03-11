<template>
 <div class="talk">
  <button @click="getLoveTalk">获取一句土味情话</button>
  <ul>
    <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title }}
    </li>
  </ul>
 </div>
</template>

<script setup lang='ts'>
import { useLoveTalkStore } from '@/store/loveTalk'
import { storeToRefs } from 'pinia';

const loveTalkStore = useLoveTalkStore();
const {talkList} = storeToRefs(loveTalkStore)
/* mutate：本次修改的信息
state：真正的数据 */
loveTalkStore.$subscribe((mutate, state) => {
  // console.log(
  //   'loveTalkStore内保存的数据发生变化',
  //   mutate, 
  //   state
  // );
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})
defineOptions({
  name: 'LoveTalk'
})


// 方法
function getLoveTalk() {
   loveTalkStore.getATalk();
}

</script>
<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>