<template>
  <a-result title="Great, we have done all the operations!">
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <a-button type="primary" @click="onClick">Next</a-button>
    </template>
  </a-result>
  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
  </a-modal>
</template>
<script setup>
import { ref } from "vue";
const open = ref(false);
const onClick = () => {
  open.value = true;
};
const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
</script>
