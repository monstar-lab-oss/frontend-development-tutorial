<template>
  <a-card :title="blog.title">
    {{ blog.body }}
    <a-divider />
    <a-button @click="showComments(blog.id)">
      <template #icon> <CommentOutlined /> </template>
      コメントを見る
    </a-button>
  </a-card>
  <a-drawer
    v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    title="Comments"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <a-list bordered :data-source="comments">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-tag color="cyan">{{ item.email }}</a-tag>
          <br />
          {{ item.body }}
        </a-list-item>
      </template>
    </a-list>
  </a-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { CommentOutlined } from "@ant-design/icons-vue";
const route = useRoute();

const blog = ref({});
const comments = ref([]);
fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  .then((response) => response.json())
  .then((data) => (blog.value = data));

const open = ref(false);
const showComments = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  comments.value = await response.json();
  open.value = true;
};
</script>
