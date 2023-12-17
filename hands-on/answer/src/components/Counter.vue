<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useCounterStore } from "../stores/index.js";

const counterStore = useCounterStore();
const countState = storeToRefs(counterStore, { count: "count" });
const count = ref(0);

const increment = () => {
  count.value++;
  counterStore.increment();
};
</script>

<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">+1</button>
    <p>{{ countState }}</p>
  </div>
</template>

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
