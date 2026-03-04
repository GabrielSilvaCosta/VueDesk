<script setup lang="ts">
defineOptions({ name: 'AppHeader' })
</script>

<template>
  <header class="header">
    <h1 class="title">
      VueDesk
    </h1>
  </header>
</template>

<style scoped>
.header {
  background: var(--color-header);
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}
</style>
