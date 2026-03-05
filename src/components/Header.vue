<script setup lang="ts">
defineOptions({ name: 'AppHeader' })
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="brand">
        <div
          class="logo"
          aria-hidden="true"
        />
        <h1 class="title">
          VueDesk
        </h1>
      </div>
      <div class="actions">
        <div class="user-info">
          <span class="user-name">Gabriel Silva</span>
          <div
            class="avatar"
            aria-hidden="true"
          />
        </div>
        <button
          type="button"
          class="btn-logout"
          aria-label="Sair"
        >
          <svg
            class="icon-logout"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line
              x1="21"
              y1="12"
              x2="9"
              y2="12"
            />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-header);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: var(--header-padding-y) var(--header-padding-x);
  gap: 1rem;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo {
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border-radius: 8px;
  flex-shrink: 0;
}
.title {
  margin: 0;
  font-family: 'Public Sans', system-ui, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.025em;
  color: var(--color-text);
}
.actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 24px;
  border-right: 1px solid var(--color-border);
}
.user-name {
  font-family: 'Public Sans', system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.43;
  color: var(--color-text);
  text-align: right;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: var(--color-avatar-bg);
  box-shadow: 0 0 0 2px var(--color-bg);
  flex-shrink: 0;
}
.btn-logout {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--color-button-primary);
  color: var(--color-header);
  border: none;
  border-radius: 8px;
  font-family: 'Public Sans', system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;
}
.btn-logout:hover {
  filter: brightness(1.05);
}
.icon-logout {
  flex-shrink: 0;
}
</style>
