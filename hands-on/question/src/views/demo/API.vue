<script setup>
import { ref } from "vue";
const users = ref(null);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => (users.value = data));
</script>

<template>
  <div class="card m-3">
    <h5 class="card-header text-center">Vue 3 fetch data from API</h5>
    <div class="card-body">
      <div v-if="users">
        <h5>Users</h5>
        <ul class="mb-0">
          <li v-for="user in users" :key="user.id">
            {{ user.name }}
            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
          </li>
        </ul>
      </div>
      <div v-if="!users" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
      </div>
    </div>
  </div>
</template>
