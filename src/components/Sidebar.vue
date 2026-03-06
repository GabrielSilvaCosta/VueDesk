<script setup lang="ts">
import { RouterLink } from "vue-router";
import { LayoutDashboard, Users, Settings } from "lucide-vue-next";

defineOptions({ name: "AppSidebar" });
</script>

<template>
  <aside class="sidebar">
    <div class="nav">
      <RouterLink
        to="/"
        class="nav-link"
        active-class="nav-link--active"
        exact-active-class="nav-link--active"
      >
        <LayoutDashboard
          class="nav-icon"
          :size="20"
          aria-hidden="true"
        />
        <span>Dashboard</span>
      </RouterLink>
      <RouterLink
        to="/usuarios"
        class="nav-link"
        active-class="nav-link--active"
        exact-active-class="nav-link--active"
      >
        <Users
          class="nav-icon"
          :size="20"
          aria-hidden="true"
        />
        <span>Usuários</span>
      </RouterLink>
      <RouterLink
        to="/configuracoes"
        class="nav-link"
        active-class="nav-link--active"
        exact-active-class="nav-link--active"
      >
        <Settings
          class="nav-icon"
          :size="20"
          aria-hidden="true"
        />
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
  padding: 12px var(--sidebar-padding) var(--sidebar-padding)
    var(--header-padding-x);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: var(--nav-link-gap);
}
.nav-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  color: var(--color-text-muted);
  text-decoration: none;
  font-family: "Public Sans", system-ui, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  transition:
    background 0.15s,
    color 0.15s;
}
.nav-link:hover {
  background: var(--color-border);
  color: var(--color-text);
}
.nav-link--active {
  background: var(--color-primary);
  color: var(--color-header);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.nav-link--active .nav-icon {
  color: var(--color-header);
  stroke: var(--color-header);
}
.nav-icon {
  flex-shrink: 0;
}
</style>
