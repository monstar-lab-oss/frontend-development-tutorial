<template>
  <h1>Hello, {{ name }}!</h1>
  <p>{{ message }}</p>
  <button @click="reverseMessage">Reverse</button>
</template>

<script setup>
import { ref, defineProps } from "vue";

const { name } = defineProps(["name"]);
const message = ref("This is component demo!");
const reverseMessage = () => {
  message.value = message.value.split("").reverse().join("");
};
</script>

<style scoped>
h1 {
  font-size: 5rem;
}
p {
  font-size: 2rem;
}
button {
  font-size: 2rem;
  padding: 1rem 2rem;
  border: 1px solid blue;
  border-radius: 0.5rem;
}
</style>
