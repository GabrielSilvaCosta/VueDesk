<script setup lang="ts">
import { RouterLink } from "vue-router";
import { LayoutDashboard, Users, Settings } from "lucide-vue-next";
import styles from "./Sidebar.module.css";

defineOptions({ name: "AppSidebar" });
</script>

<template>
  <aside :class="styles.sidebar">
    <div :class="styles.nav">
      <RouterLink
        to="/"
        :class="styles.navLink"
        :active-class="styles.navLinkActive"
        :exact-active-class="styles.navLinkActive"
      >
        <LayoutDashboard
          :class="styles.navIcon"
          :size="20"
          aria-hidden="true"
        />
        <span>Dashboard</span>
      </RouterLink>
      <RouterLink
        to="/usuarios"
        :class="styles.navLink"
        :active-class="styles.navLinkActive"
        :exact-active-class="styles.navLinkActive"
      >
        <Users
          :class="styles.navIcon"
          :size="20"
          aria-hidden="true"
        />
        <span>Usuários</span>
      </RouterLink>
      <RouterLink
        to="/configuracoes"
        :class="styles.navLink"
        :active-class="styles.navLinkActive"
        :exact-active-class="styles.navLinkActive"
      >
        <Settings
          :class="styles.navIcon"
          :size="20"
          aria-hidden="true"
        />
        <span>Configurações</span>
      </RouterLink>
    </div>
  </aside>
</template>
