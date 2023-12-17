<template>
  <p>ここにBlogsを表示してください</p>
  画面遷移のためのボタン例：
  <a-button type="link" @click="gotoBlog(3)">Blog 3</a-button>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const gotoBlog = (id) => {
  router.push("/hands-on/blogs/" + id);
};
</script>
