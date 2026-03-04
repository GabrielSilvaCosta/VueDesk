<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({ name: 'AppSidebar' })
</script>

<template>
  <aside class="sidebar">
    <nav>
      <RouterLink to="/">
        Dashboard
      </RouterLink>
      <RouterLink to="/usuarios">
        Usuários
      </RouterLink>
      <RouterLink to="/configuracoes">
        Configurações
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  background: var(--color-sidebar);
  color: #fff;
  padding: 1rem;
}
.sidebar a {
  display: block;
  color: #e5e7eb;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
}
.sidebar a:hover,
.sidebar a.router-link-active {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}
</style>
