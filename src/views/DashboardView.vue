<script setup lang="ts">
import { Plus } from "lucide-vue-next";
import styles from "./DashboardView.module.css";

defineOptions({ name: "DashboardView" });
</script>

<template>
  <div :class="styles.page">
    <header :class="styles.pageHeader">
      <h1 :class="styles.pageTitle">
        Dashboard
      </h1>
      <button
        type="button"
        :class="styles.btnAdd"
        aria-label="Adicionar novo"
      >
        <Plus
          :class="styles.btnAddIcon"
          :size="14"
          aria-hidden="true"
        />
        <span>Add New</span>
      </button>
    </header>
    <div :class="styles.contentPlaceholder">
      <span :class="styles.contentPlaceholderText">Content here</span>
    </div>
  </div>
</template>
