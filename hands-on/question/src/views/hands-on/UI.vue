<template>
  <p>ここにUI Libraryを利用し、ユーザー情報をキレイに表示してください</p>
  <h1 class="text-blue-500">Name: {{ user.name }}</h1>
</template>

<script setup>
import { ref } from "vue";
const user = ref({
  id: 1,
  image: "https://via.placeholder.com/150/771796",
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
});
</script>
