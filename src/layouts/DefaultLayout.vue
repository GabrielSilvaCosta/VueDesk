<script setup lang="ts">
import AppSidebar from "@/components/Sidebar.vue";
import AppHeader from "@/components/Header.vue";
</script>

<template>
  <div class="layout">
    <header class="header-wrap">
      <AppHeader />
    </header>
    <div class="body">
      <AppSidebar />
      <main class="main">
        <div class="content">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg);
}
.header-wrap {
  flex-shrink: 0;
  width: 100%;
}
.body {
  flex: 1;
  display: flex;
  min-height: 0;
  max-width: var(--layout-max-width);
  width: 100%;
  margin: 0 auto;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.content {
  flex: 1;
  padding: var(--content-padding);
  background: var(--color-bg-content);
}
</style>
