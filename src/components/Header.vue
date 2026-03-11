<script setup lang="ts">
import { LayoutGrid, LogOut } from "lucide-vue-next";
import avatarImg from "@/assets/img/icone.png";
import styles from "./Header.module.css";

defineOptions({ name: "AppHeader" });
</script>

<template>
  <header :class="styles.header">
    <div :class="styles.container">
      <div :class="styles.brand">
        <div
          :class="styles.logo"
          aria-hidden="true"
        >
          <LayoutGrid
            :class="styles.logoIcon"
            :size="22"
          />
        </div>
        <h1 :class="styles.title">
          VueDesk
        </h1>
      </div>
      <div :class="styles.actions">
        <div :class="styles.userInfo">
          <span :class="styles.userName">Gabriel Silva</span>
          <div
            :class="styles.avatar"
            aria-hidden="true"
          >
            <img
              :src="avatarImg"
              alt=""
              :class="styles.avatarImg"
            >
          </div>
        </div>
        <button
          type="button"
          :class="styles.btnLogout"
          aria-label="Sair"
        >
          <LogOut
            :class="styles.iconLogout"
            :size="14"
            aria-hidden="true"
          />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>
</template>
