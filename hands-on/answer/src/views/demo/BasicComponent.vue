<script setup>
import BasicDemo from "../../components/BasicDemo.vue";

import { storeToRefs } from "pinia";
import { useCounterStore } from "../../stores/index.js";

const store = useCounterStore();
const count = storeToRefs(store, { count: "count" });
</script>

<template>
  <BasicDemo name="Vue" />

  <h1>{{ count }}</h1>
</template>
