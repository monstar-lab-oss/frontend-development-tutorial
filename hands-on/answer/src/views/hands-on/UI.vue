<template>
  <p>ここにUI Libraryを利用し、ユーザー情報をキレイに表示してください</p>
  <a-card v-if="user">
    <a-typography-title class="text-blue-500">{{
      user.name
    }}</a-typography-title>
    <a-descriptions title="User Info" bordered>
      <a-descriptions-item label="Name">{{ user.name }}</a-descriptions-item>
      <a-descriptions-item label="Email">
        <a-tag color="green">{{ user.email }}</a-tag></a-descriptions-item
      >
      <a-descriptions-item label="Tel">{{ user.phone }}</a-descriptions-item>
      <a-descriptions-item label="Company" :span="3">
        {{ user.company.name }}
      </a-descriptions-item>

      <a-descriptions-item label="Address">
        {{ user.address.street }}
        <br />
        {{ user.address.suite }}
        <br />
        {{ user.address.city }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script setup>
import { ref } from "vue";
const user = ref(null);

fetch("https://jsonplaceholder.typicode.com/users/5")
  .then((response) => response.json())
  .then((data) => (user.value = data));
</script>
