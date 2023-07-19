<script setup lang="ts">
import { ref } from 'vue';
// import ColorSelector from './ColorSelector/index'
import {ColorSelector} from 'kingcwt-ui'

const color = ref('#f5f6f7')

const handleChangeColor = (str:string)=>{
  console.log(str,'color')
  color.value = str;
}

</script>

<template>
 <div class="kingcwt_ct">
  <ColorSelector :color="color" :handleChangeColor="handleChangeColor"  />
 </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>./ColorSelector/common/SeedTokenPreview