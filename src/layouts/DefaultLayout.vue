<script setup lang="ts">
import AppSidebar from "@/components/Sidebar.vue";
import AppHeader from "@/components/Header.vue";
import styles from "./DefaultLayout.module.css";
</script>

<template>
  <div :class="styles.layout">
    <header :class="styles.headerWrap">
      <AppHeader />
    </header>
    <div :class="styles.body">
      <AppSidebar />
      <main :class="styles.main">
        <div :class="styles.content">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>
