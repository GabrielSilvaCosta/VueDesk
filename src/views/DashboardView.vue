<script setup lang="ts">
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
        <svg
          class="btn-add-icon"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
          />
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          />
        </svg>
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
