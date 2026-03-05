<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({ name: 'AppSidebar' })
</script>

<template>
  <aside class="sidebar">
    <div class="nav">
      <RouterLink
        to="/"
        class="nav-link"
        active-class="nav-link--active"
      >
        <svg
          class="nav-icon"
          width="22"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
          />
        </svg>
        <span>Dashboard</span>
      </RouterLink>
      <RouterLink
        to="/usuarios"
        class="nav-link"
        active-class="nav-link--active"
      >
        <svg
          class="nav-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle
            cx="9"
            cy="7"
            r="4"
          />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <span>Usuários</span>
      </RouterLink>
      <RouterLink
        to="/configuracoes"
        class="nav-link"
        active-class="nav-link--active"
      >
        <svg
          class="nav-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="3"
          />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <span>Configurações</span>
      </RouterLink>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  background: var(--color-sidebar);
  border-right: 1px solid var(--color-border);
  padding: var(--sidebar-padding);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: var(--nav-link-gap);
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: var(--nav-link-padding);
  border-radius: var(--nav-link-radius);
  color: var(--color-text-muted);
  text-decoration: none;
  font-family: 'Public Sans', system-ui, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  transition: background 0.15s, color 0.15s;
}
.nav-link:hover {
  background: var(--color-border);
  color: var(--color-text);
}
.nav-link--active {
  background: var(--color-primary);
  color: var(--color-header);
}
.nav-icon {
  flex-shrink: 0;
}
</style>
