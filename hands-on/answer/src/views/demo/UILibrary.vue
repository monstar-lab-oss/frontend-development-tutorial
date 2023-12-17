<template>
  <a-card title="UIデモ">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1">
        <template #tab>
          <span>
            <HomeOutlined />
            HOME
          </span>
        </template>
        <UIHome />
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span>
            <SettingOutlined />
            SETTING
          </span>
        </template>
        <Form />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script setup>
import { HomeOutlined, SettingOutlined } from "@ant-design/icons-vue";
import UIHome from "../../components/UIHome.vue";
import Form from "../../components/Form.vue";
import { ref } from "vue";
const activeKey = ref("1");
</script>
