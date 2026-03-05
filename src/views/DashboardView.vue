<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

defineOptions({ name: 'DashboardView' })
</script>

<template>
  <div class="page">
    <header class="page-header">
      <h1 class="page-title">
        Dashboard
      </h1>
      <button
        type="button"
        class="btn-add"
        aria-label="Adicionar novo"
      >
        <Plus
          class="btn-add-icon"
          :size="14"
          aria-hidden="true"
        />
        <span>Add New</span>
      </button>
    </header>
    <div class="content-placeholder">
      <span class="content-placeholder-text">Content here</span>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.page-title {
  margin: 0;
  font-family: 'Public Sans', system-ui, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  color: var(--color-text);
}
.btn-add {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--color-primary);
  color: var(--color-header);
  border: none;
  border-radius: 12px;
  font-family: 'Public Sans', system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;
}
.btn-add:hover {
  filter: brightness(1.05);
}
.btn-add-icon {
  flex-shrink: 0;
}
.content-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 256px;
  background: var(--color-header);
  border: 2px dashed var(--color-border-dashed);
  border-radius: 16px;
}
.content-placeholder-text {
  font-family: 'Public Sans', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-placeholder);
}
</style>
