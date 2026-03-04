<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />
    <main class="main">
      <Header />
      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}
.content {
  flex: 1;
  padding: 1.5rem;
}
</style>
